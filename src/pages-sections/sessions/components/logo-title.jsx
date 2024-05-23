import Image from "next/image"; // CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center"; // IMPORT IMAGES

import logo from "../../../../public/assets/images/auth-logo.png";
import { Box } from "@mui/material";
export default function LogoWithTitle({ pathname }) {
  return <FlexRowCenter flexDirection="column" alignItems="start"  gap={1.5} mb={1}>
        <Box marginRight="auto">
          <Image src={logo} alt="bazaar" width={110} height={45} />
        </Box>
        {pathname === "/login" && <H5 fontWeight={700} fontSize="24px" color="#111111">Bienvenido a Agromerca2</H5>}
        {pathname === "/register" && <H5 fontWeight={700} fontSize="24px" color="#111111">Regístrate en Agromerca2</H5>}
        {pathname === "/reset-password" && <H5 fontWeight={700} fontSize="24px" textAlign="center" width="100%" mb={1} color="#111111">Agromerca2</H5>}
    </FlexRowCenter>;
}