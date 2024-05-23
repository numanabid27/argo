"use client";

import Link from "next/link";
import styled from "@mui/material/styles/styled"; // ==============================================================

// ==============================================================
export const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== "isDark"
})(({
  theme,
  isDark
}) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  ...(!isDark && {
    color: theme.palette.grey[500],
    "&:hover": {
      color: theme.palette.grey[100]
    }
  })
}));
export const StyledFooter = styled("footer")(({
  theme
}) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem"
  }
}));
export const StyledRoot = styled("footer")(({
  theme
}) => ({
  padding: 40,
  color: "white",
  borderRadius: 8,
  background: theme.palette.primary[600],
  [theme.breakpoints.down("md")]: {
    marginBottom: "6rem !important"
  }
}));
export const Heading = styled("h6")({
  fontSize: 18,
  lineHeight: 1,
  fontWeight: 600,
  marginBottom: 12
});

export const Heading5 = styled("h5")({
  fontSize: 20,
  lineHeight: 1,
  fontWeight: 600,
  color:"#fff",
  marginBottom: 12
});


export const StyledLink2 = styled(Link, {
  shouldForwardProp: prop => prop !== "isDark"
})(({
  theme,
  isDark
}) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color:"#fff",
  fontSize:'16px',
  ...(!isDark && {
    color:"#fff",
    
  })
}));

export const Subscription = styled("div")({
  background:'#06CB5B',
  padding: '30px 23px',
  borderRadius: '12px',
  "input":{
    background:'#fff',
    padding: "11px 7px",
    border: "none",
    outline: "none",
    color: "#000",
    borderRadius: "6px 0px 0px 6px",
  },
  "button":{
    background:'#118F31',
    padding: "6.2px 7px",
    borderRadius: "0px 6px 6px 0px",
  }
});

export const MobileSubscription = styled("div")({
  padding: "0px 10px",
  borderRadius: "8px",
  border: "1px solid #80808061",
  background: "#fff",
  marginTop: "16px",
  background:"#fff",
  "input":{
    background:'#fff',
    padding: "17px 5px",
    border: "none",
    outline: "none",
    color: "#000",
    width:'100%',
  },
  "button":{
    background:'#00000059',
    padding: "6.2px 7px",
    color:'#fff',
    borderRadius: "6px",
    
  }
});

export const Social = styled('div')({
  background:"#80808080",
  marginBottom:'66px',
  padding:'16px 0px 3px',
  "span":{
    display: "block",
    fontSize: "14px",
    color: "#00000059",
    borderTop: "1px solid #00000059",
    padding: "5px 7px",
    marginTop:'13px'
  },
  "img":{
    width:'100%'
  },
  ".social_row":{
    gap: "9px",
    margin: "15px auto 0",
    maxWidth: "153px",
  }
})