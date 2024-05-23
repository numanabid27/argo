import { Fragment } from "react";
import { Heading5, StyledLink2 } from "../styles";

// ==============================================================
export default function CustomerCareLinks({
  isDark
}) {
    const CUSTOMER_CARE_LINKS = ["Centro de ayuda", "Rastrea tu orden", "FAQs"];
  return <Fragment>
      <Heading5>Atención al Cliente</Heading5>

      {CUSTOMER_CARE_LINKS.map((item, ind) => <StyledLink2 isDark={isDark} href="/" key={ind}>
          {item}
        </StyledLink2>)}
    </Fragment>;
}