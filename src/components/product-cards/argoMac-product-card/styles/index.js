import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
import { fontSize } from "theme/typography";
export const Card = styled("div")({
  img: {
    borderRadius:"12px",
    maxHeight: '23vh',
    objectFit:'cover',
    "@media screen and (max-width:767px)":{
      maxHeight: '17vh',
    }
  },
  ":hover": {
   
    ".product-actions": {
      right: 15
    },
    ".product-view-action": {
      opacity: 1
    }
  }
});
export const CardMedia = styled("div")(({
  theme
}) => ({
  backgroundColor: "#06CB5B",
  borderRadius: '14px',
  padding: "15px 12px",
  "@media screen and (max-width:767px)":{
    padding: "9px 7px",
  }
}));
export const AddToCartButton = styled(IconButton)(({
  theme
}) => ({
  top: 15,
  right: -40,
  position: "absolute",
  backgroundColor: "white",
  transition: "right 0.3s .1s",
  color: theme.palette.text.primary,
  ".icon": {
    fontSize: 16
  }
}));
export const FavoriteButton = styled(IconButton)(({
  theme
}) => ({
  top: 55,
  right: -40,
  position: "absolute",
  backgroundColor: "white",
  transition: "right 0.3s .2s",
  color: theme.palette.text.primary,
  ".icon": {
    fontSize: 16
  }
}));
export const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 12,
  opacity: 0,
  borderRadius: 4,
  position: "absolute",
  transition: "all 0.3s"
});


export const ProductImg = styled('div')({
  width: '99%',
  margin: '0 auto',
});

export const ProductFearure = styled('h3')({
  fontWeight:700,
  py:0.5,
  display:"flex", 
  alignItems:"center",
  margin: "0 auto",
  width: '65%',
  gap:"8px",
  color:"#fff",
  fontWeight:400,
  paddingTop:"8px",
  ".MuiSvgIcon-root":{
    width:'24px',
    "@media screen and (max-width:767px)":{
      width: '20px',
    }
  },
  "@media screen and (max-width:767px)":{
    width: '100%',
    fontSize: "16px",
    paddingTop:"4px",
  }
});

export const IconCircle = styled('div')({
  border: '1px solid #fff',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  "@media screen and (max-width:767px)":{
    width: '26px',
    height: '26px',
  },
  "svg":{
    color:"#fff",
    margin: 'auto',
    fontSize:"19px",
    "@media screen and (max-width:767px)":{
      width: '15px',
    },
  }
})