import { Box } from "@mui/material";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
import ArgoMacCrad from "components/product-cards/argoMac-product-card/product-card";

import api from "utils/__api__/fashion-2";
export default async function Section4({width}) {

  const products = await api.getProducts();
  const responsive = [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 2,
      dots: false
    }
  }, {
    breakpoint: 426,
    settings: {
      slidesToShow: 2,
      dots: false
    }
  }];

  return <Container className="mt-4">
      <Box sx={{margin:'0 auto', maxWidth:"1100px"}}>
        <H2 textAlign="left" mb={4}>
          Mira las redes agro ventas
        </H2>
        <Carousel slidesToShow={4} dots={true} responsive={responsive} arrowStyles={{
          backgroundColor: "dark.main",
          top: "37%"
        }} className="slick_arrow">
          {products.map(product => <ArgoMacCrad key={product.id} product={product} />)}
        </Carousel>
      </Box>
    </Container>;
}