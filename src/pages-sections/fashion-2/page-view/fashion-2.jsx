// GLOBAL CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section4 from "../section-4";
import { Box } from "@mui/material";
import Section11 from "../section-11";

export default async function FashionTwoPageView() {
  return (
    <Box bgcolor="grey.100">
      {/* HERO SECTION CAROUSEL */}
      <Section1 />

      {/* SERVICE CARDS */}
      <Section2  />

      {/* BEST SELLING PRODUCTS */}
      <Section4 />

      <Section11 />

      <Box mb={3}>
        <Section4 />
      </Box>
    </Box>
  );
}
