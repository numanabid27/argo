"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react"; // GLOBAL CUSTOM COMPONENTS
import Sticky from "components/sticky";
import { Footer1 } from "components/footer";
import { SearchInputWithCategory } from "components/search-box";
import { MobileNavigationBar } from "components/mobile-navigation";
import { NavBar } from "components/header/styles";
import MobileFooter from "components/footer/mobile-footer";
import useDimensions from "hooks/useWindowSize";
import Header from "components/header/header";
import { Box, Button } from "@mui/material";
import { H2, H6 } from "components/Typography";
import logo from "../../../../public/assets/images/navlogo-brown.png";
import Image from "next/image";
import { FlexBox } from "components/flex-box";
import { Model, Overlay } from "./style";
import { usePathname } from "next/navigation";

export default function ShopLayout4({ children }) {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  const [isModel, setIsModel] = useState(false);
  const { width } = useDimensions();
  const pathname= usePathname();

  useEffect(() => {
    if(pathname === "/"){
      setIsModel(true);
    }

  }, []);

  const handleClick = () => {
    setIsModel(false);
  };
 
  return (
    <Fragment>
      {isModel && (
        <Overlay>
          <Model>
            <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
              <H2>Bienvenido a Agromerca2</H2>
              <Image src={logo} alt="logo" width={180} height={70} />
            </FlexBox>
            <H6>
              Con tu consentimiento, usamos cookies para almacenar, acceder y
              procesar datos personales, como tus visitas a esta página web, las
              direcciones IP y los identificadores de cookies. Puedes retirar tu
              consentimiento u oponerte al procesamiento de datos según el
              interés legítimo en cualquier momento haciendo clic en 'Rechazar''
              o en la política de privacidad de esta página web.
            </H6>
            <FlexBox mt={5} gap="23px">
              <Button className="button">Acepto</Button>
              <Button className="button2" onClick={() => handleClick()}>
                Rechazar
              </Button>
            </FlexBox>
          </Model>
        </Overlay>
      )}

      {/* HEADER */}
      <NavBar>
        <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
          <Header
            isFixed={isFixed}
            midSlot={<SearchInputWithCategory />}
            className="header"
          />
        </Sticky>
      </NavBar>

      {/* BODY CONTENT */}
      {children}
      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar />
      {/* FOOTER */}
      {width && width <= 767 ? <MobileFooter /> : <Footer1 />}
    </Fragment>
  );
}
