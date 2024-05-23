import { Fragment } from "react";
import {  Heading5,  StyledLink2 } from "../styles";

// ==============================================================
export default function AboutLinks({
  isDark
}) {
    const ABOUT_LINKS = ["Aviso Legal", "Términos y Condiciones", "Política de cookies", "Política de privacidad", "Envíos y devoluciones"];
  return <Fragment>
      <Heading5>Sobre Nosotros</Heading5>

      <div>
        {ABOUT_LINKS.map((item, ind) => <StyledLink2 isDark={isDark} href="/" key={ind}>
            {item}
          </StyledLink2>)}
      </div>
    </Fragment>;
}