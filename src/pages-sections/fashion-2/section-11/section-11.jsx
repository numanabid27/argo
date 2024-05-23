import React from 'react';
import Link from 'next/link';
import { IconCircle, LocDate, ProductBox, Row, ViewMoreRow } from './styles';
import { Box, Grid } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { H6 } from 'components/Typography';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function ViewMoreProduct() {
  return (
    <Row>
        <ViewMoreRow>
            <h4>Mira las redes agro acopios</h4>
            <Link href="#">
                ver mas
            </Link>
        </ViewMoreRow>

        <ProductBox>
            <Grid container spacing={2} m={0}> 
                <Grid sm={2.7} xs={3.8} className='col-1'>
                    <img src="/assets/images/products/product-avatar.png" alt="" />
                </Grid>
                <Grid sm={8} xs={8.2} className='col-2'>
                    <h6>Rancho Don Raul</h6>
                    <h2> Ganado bovino</h2>
                    <LocDate>
                        <Box display="flex" alignItems="center" gap="6px">
                            <FmdGoodOutlinedIcon />
                            <span>Mérida</span>
                        </Box>
                        <Box>
                            <span>25/05/2024</span>
                        </Box>
                    </LocDate>
                </Grid>
            </Grid>

            <Box display="flex" gap="10px" justifyContent="center">
                <H6 color="#fff" fontSize={{sm:"18px", xs:"16px"}} fontWeight="500">18 ton</H6>
                <H6 color="#fff" fontSize={{sm:"18px", xs:"16px"}} fontWeight="500">150-210 kg</H6>
                <H6 color="#fff" fontSize={{sm:"18px", xs:"16px"}} fontWeight="500" display="flex" gap="10px">
                    <MonetizationOnOutlinedIcon />
                    <span>55.00 kg</span>
                </H6>
            </Box>

            <Box display="flex" gap="30px" justifyContent="flex-end" alignItems="center" marginTop="15px">
                <H6 color="#fff" fontSize={{sm:'18px', xs:'16px'}}>10 usuarios</H6>
                <Box display="flex" gap="30px">
                    <IconCircle sx={{cursor:"pointer"}}>
                        <ThumbUpIcon />
                    </IconCircle>
                    <IconCircle>
                        <NotificationsActiveIcon sx={{cursor:"pointer"}} />
                    </IconCircle>
                    <IconCircle>
                        <ShortcutIcon sx={{cursor:"pointer"}} />
                    </IconCircle>
                </Box>
            </Box>
            
        </ProductBox>
    </Row>
  )
}
