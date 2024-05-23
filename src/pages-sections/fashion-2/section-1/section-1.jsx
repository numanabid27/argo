import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import AgroMercaCarousal from "components/carousel-cards/ar-carousal/ar-carousal";


import api from "utils/__api__/fashion-2";
export default async function Section1() {
  const carouselData = await api.getMainCarouselData();
  return <Box bgcolor="grey.100">
      <Container className="pt-2 pb-2">
        <Carousel dots spaceBetween={0} slidesToShow={1} arrows={false}>
          {carouselData.map((item, ind) => <AgroMercaCarousal key={ind}  imgUrl={item.imgUrl} />)}
        </Carousel>
      </Container>
    </Box>;
}