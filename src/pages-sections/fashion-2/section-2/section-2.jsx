import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENT
import { RootStyle } from "./styles"; // API FUNCTIONS

import api from "utils/__api__/fashion-2";
import AgroServicecard from "components/service-cards/Agro-service-card/agro-serviceCard";
import { H2 } from "components/Typography";

export default async function Section2() {
  const categories = await api.getCategories();
  return <Container>
      <RootStyle>
        <H2 className="mb-2">Sectores</H2>
        <div className="root">
          {categories.map(({
            id,
            image,
            slug
          }) => <AgroServicecard key={id} slug={slug} image={image} />)}
        </div>
      </RootStyle>
    </Container>;
}