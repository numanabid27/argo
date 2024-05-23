"use client";

import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
export const COMMON_DOT_STYLES = {
  left: 0,
  right: 0,
  bottom: 25,
  position: "absolute"
};
export const RootStyle = styled("div", {
  shouldForwardProp: prop => prop !== "space"
})(({
  space
}) => ({
  ".slick-list": {
    marginInline: -space
  },
  ".slick-slide": {
    paddingInline: space,
    "@media screen and (max-width:767px)":{
      paddingInline:'5px !important'
    }
  },
  ".slick-arrow": {
        opacity: 1,
        "&.next": {
          right: "-44px",
          background:'#06CB5B',
          "@media screen and (max-width:767px)":{
            display:'none',
          }
        },
        "&.prev": {
          left: "-44px",
          background:'#06CB5B',
          "@media screen and (max-width:767px)":{
            display:'none'
          }
        },
       
      }
  // ":hover": {
  //   ".slick-arrow": {
  //     opacity: 1,
  //     "&.next": {
  //       right: "-44px"
  //     },
  //     "&.prev": {
  //       left: "-44px"
  //     }
  //   }
  // }
}));
export const DotList = styled(Box)(({
  theme
}) => ({
  gap: 6,
  zIndex: 1,
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  "& li": {
    width: 15,
    height: 15,
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    background:'#A6A6A6',
    borderRadius:"50%",
    "&.slick-active":{
      background:'#00401A',
    },
    "&.slick-active span::after": { 
      background:'transparent'
    }
  }
}));
export const Dot = styled("span", {
  shouldForwardProp: prop => prop !== "dotColor"
})(({
  dotColor,
  theme
}) => ({
  width: "100%",
  height: "100%",
  cursor: "pointer",
  borderRadius: "50%",
  position: "relative",
  // border: `1px solid ${dotColor || theme.palette.secondary.main}`,
 
  "&:after": {
    scale: 0,
    inset: 0,
    width: 9,
    height: 9,
    content: '""',
    margin: "auto",
    borderRadius: "50%",
    position: "absolute",
    transition: "scale 500ms ease-in-out",
    backgroundColor: dotColor || theme.palette.secondary.main
  }
}));
export const ArrowButton = styled(Box)(({
  theme
}) => ({
  zIndex: 1,
  width: 35,
  height: 35,
  padding: 0,
  opacity: 1,
  top: "50%",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(0, -50%)",
  transition: "all 0.2s ease-in-out",
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)"
}));