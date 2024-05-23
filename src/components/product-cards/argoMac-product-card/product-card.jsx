"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating"; // MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"; // LOCAL CUSTOM HOOK
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import useProduct from "../use-product"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexRowCenter } from "components/flex-box";
import { H4, Paragraph, Small } from "components/Typography";
import ProductViewDialog from "components/products-view/product-view-dialog"; // CUSTOM UTILS LIBRARY FUNCTION
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import { currency } from "lib"; // CUSTOM COMPONENTS

import {
  AddToCartButton,
  Card,
  CardMedia,
  FavoriteButton,
  IconCircle,
  ProductFearure,
  ProductImg,
  QuickViewButton,
} from "./styles"; // CUSTOM DATA MODEL
import { Typography } from "@mui/material";

// ==============================================================
export default function ArgoMacCrad({ product }) {
  const { slug, id, title, price, thumbnail, images, categories, reviews , shop, address, weight, users} =
    product || {};
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
    openModal,
    toggleDialog,
    toggleFavorite,
  } = useProduct(slug); // HANDLE ADD TO CART PRODUCT

  const handleAddToCart = () => {
    const payload = {
      id,
      slug,
      price,
      name: title,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) + 1,
    };
    handleCartAmountChange(payload);
  };

  return (
    <Card style={{marginBottom:"20px"}}>
        <CardMedia>
            <ProductImg>
                <Link href={`/products/${slug}`}>
                    <LazyImage
                        width={100}
                        height={100}
                        alt="category"
                        className="product-img"
                        src={thumbnail}
                    />
                </Link>
            </ProductImg>

            

            {/* PRODUCT QUICK VIEW BUTTON */}
            {/* <Box mx={1} position="relative">
                <QuickViewButton
                    fullWidth
                    size="large"
                    color="dark"
                    variant="contained"
                    className="product-view-action"
                    onClick={toggleDialog}
                >
                    Quick View
                </QuickViewButton>
            </Box> */}
            {/* <ProductViewDialog
                openDialog={openModal}
                handleCloseDialog={toggleDialog}
                product={{
                    id,
                    slug,
                    title,
                    price,
                    imgGroup: images,
                }}
                /> */}

                <Box p={1} textAlign="center">
                {/* PRODUCT TITLE / NAME */}
                <Paragraph fontWeight='500' color="#fff" fontSize={{sm:"18px", xs:"16px"}}>{title}</Paragraph>

                {/* PRODUCT CATEGORY */}
                {categories.length > 0 ? (
                    <Typography 
                        color="#fff" 
                        fontSize={{sm:'15px',xs:'14px'}} 
                        fontWeight='500' 
                        textAlign="center"
                        height={{sm:'unset', xs:'42px'}}
                        display={{sm:'unset', xs:'flex'}}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {categories[0]}
                    </Typography>
                ) : null}

                {/* PRODUCT PRICE  */}
                <ProductFearure>
                    <MonetizationOnOutlinedIcon />
                    <span>{price}</span>
                </ProductFearure>

                <ProductFearure>
                    <ScaleOutlinedIcon />
                    <span>{shop.weight}</span>
                </ProductFearure>

                <ProductFearure>
                    <FmdGoodOutlinedIcon />
                    <span>{shop.address}</span>
                </ProductFearure>

                <ProductFearure>
                    <GroupOutlinedIcon />
                    <span>{users}</span>
                </ProductFearure>

                
            </Box>
            <Box display="flex" justifyContent="flex-end" gap='8px' mt={1}>
                <IconCircle onClick={toggleFavorite} sx={{cursor:"pointer"}}>
                    {isFavorite ? (
                        <ThumbUpIcon />
                    ) : (
                        
                        <ThumbUpOffAltIcon />
                    )}
                </IconCircle>
                <IconCircle>
                    <NotificationsActiveIcon sx={{cursor:"pointer"}} />
                </IconCircle>
                <IconCircle>
                    <ShortcutIcon onClick={handleAddToCart} sx={{cursor:"pointer"}} />
                </IconCircle>
               
                {/* PRODUCT FAVORITE BUTTON */}
                
            </Box>
            
        </CardMedia>
    </Card>
   
  );
}
