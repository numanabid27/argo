"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import { FlexRowCenter } from "components/flex-box";
import { H2, H5 } from "components/Typography";
import { primary } from "theme/theme-colors";
import { ErrorBox, ErrorStyled } from "./style";
export default function NotFound() {
  return (
    <ErrorStyled>
      <FlexRowCenter
        px={2}
        minHeight="80vh"
        flexDirection="column"
        alignItems="center"
      >
        <ErrorBox>
          <Image
            alt="Not Found!"
            src={require("../../../public/assets/images/variant-brown-logo.png")}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </ErrorBox>
        <H2 color={primary[901]} fontSize={{sm:'70px', xs:"44px"}}>
          404
        </H2>
        <H5 fontSize={{sm:'30px', xs:'20px'}} color={primary[902]} fontWeight="700">
          ¡Ups! Página no encontrada
        </H5>
      </FlexRowCenter>
    </ErrorStyled>
  );
}
