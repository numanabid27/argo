import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { MobileSubscription, Social } from "./styles";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BazaarImage from "components/BazaarImage";

export default function MobileFooter() {
  return (
    <>
        <Box sx={{padding:'10px 20px'}}>
            <Typography sx={{fontWeight:'500'}}>MentanGase informado subscribendose a nuestro a boliten a continouse</Typography>
            <MobileSubscription>
              <Box display="flex" alignItems="center">
                <input type="text" placeholder="Enter your email" />
                <Button>
                    <ArrowRightAltIcon />
                </Button>
              </Box>
            </MobileSubscription>
            <Link href="/fashion-2">
                <BazaarImage
                    style={{width: "50%" , margin:'22px auto 15px', display:'block'}}
                    src="/assets/images/logo-image-green.png"
                    alt="logo"
                />
            </Link>
           
        </Box>

        <Social>
            <Typography sx={{fontWeight:'500', textAlign:"center"}}>Sigunos en neustras rds socials</Typography>
            <Box display="flex" className="social_row">
                <Link href="#">
                    <BazaarImage src="/assets/images/social/facebook.png" alt="facebook" />
                </Link>
                <Link href="#">
                    <BazaarImage src="/assets/images/social/instagram.png" alt="instagram" />
                </Link>
                <Link href="#">
                    <BazaarImage src="/assets/images/social/tiktok.png" alt="tiktok" />
                </Link>
                <Link href="#">
                    <BazaarImage src="/assets/images/social/youtube.png" alt="youtube" />
                </Link>
            </Box>
            <span>@agromerca2. Todod los derechos reservados 2024</span>
        </Social>
        
    </>
  );
}
