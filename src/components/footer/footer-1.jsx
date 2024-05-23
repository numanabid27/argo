import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT
import Image from "components/BazaarImage";
import { H6 } from "components/Typography"; // STYLED COMPONENTS
import { Heading, Heading5, Subscription } from "./styles";
import Link from "next/link";
import AboutLinks from "./components/argo-merca-about";
import CustomerCareLinks from "./components/argo-merce-customer";
import { Button } from "@mui/material";
import BazaarImage from "components/BazaarImage";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

export default function Footer1() {
  return (
    <Box
      component="footer"
      bgcolor="#118F31"
      mb={{
        sm: 0,
        xs: 7,
      }}
    >
      <Box
        component={Container}
        color="white"
        overflow="hidden"
        pt={{xs: 8}}
        pb={{xs: 6}}
      >
        <Grid container spacing={3} sx={{    
          justifyContent: 'space-etween',
          margin: '0 auto',
          maxWidth: '1292px'}}>
          <Grid item lg={3.5} md={6} sm={6} xs={12}>
            <Link href="/fashion-2">
              <Image
                mb={2.5}
                sx={{ maxWidth: "203px" }}
                src="/assets/images/logo-image-dark.png"
                alt="logo"
              />
            </Link>
            <H6 sx={{ fontWeight: 400, fontSize: "18px" }}>
              Prol. Agapito Jesus Domínguez #50. Villa Macultepec. Centro,
              Tabasco, México.
            </H6>
            <Box>
              <BazaarImage src="/assets/images/map.png" alt="location" style={{marginTop:"12px"}} />
              <Link
                href="maito:info.mercadoagro@gmail.com"
                style={{
                  fontSize: "18px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems:'center',
                  gap:'10px'
                }}
              >
                <MailIcon />
                <span>info.mercadoagro@gmail.com</span>
              </Link>
            </Box>
            <Box>
              <Link
                href="tel:+52 993 428 8463"
                style={{
                  fontSize: "18px",
                  paddingBottom: "12px",
                  display: "flex",
                  alignItems:'center',
                  gap:'10px'
                }}
              >
                <CallIcon />
                <span>+52 993 428 8463</span>
              </Link>
            </Box>
          </Grid>

          {/* ABOUT US LINKS */}
          <Grid item lg={2.5} md={6} sm={6} xs={12}>
            <AboutLinks />
          </Grid>

          {/* CUSTOMER CARE LINKS */}
          <Grid item lg={2.5} md={6} sm={6} xs={12}>
            <CustomerCareLinks />
          </Grid>

          {/* CONTACT & SOCIAL LINKS */}
          <Grid item lg={3.2} md={6} sm={6} xs={12}>
            {/* CONTACT INFORMATION */}
            <Subscription>
              <Heading5 sx={{textAlign:"center"}}>Suscríbete</Heading5>
              <Heading sx={{fontWeight:400, fontSize:'16px'}}>Conoce todas las novedades de agromerca2</Heading>
              <Box display="flex" alignItems="center" pt={3}>
                <input type="text" />
                <Button>Suscribirse</Button>
              </Box>
            </Subscription>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{background:'#026229', padding:'13px 0px'}}>
        <H6 textAlign="center" fontSize='16px' color="#ffffffbf">Copyright © 2024. Todos los derechos reservados. Agromerca2.</H6>
      </Box>
    </Box>
  );
}
