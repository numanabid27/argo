"use client";

import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import FlexRowCenter from "components/flex-box/flex-row-center"; // STYLED COMPONENTS

export const RootStyle = styled("div")(({
  theme
}) => ({
    maxWidth: "691px",
    margin: "0 auto",
  ".root":{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap:'90px',
    "@media screen and (max-width:767px)":{
      gap:'20px',
    }
  },

  [theme.breakpoints.down("md")]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  [theme.breakpoints.down("sm")]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr"
  }
}));
export const ServiceItem = styled(FlexRowCenter)(({
  theme
}) => ({
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  ":last-child": {
    borderRight: 0
  },
  [theme.breakpoints.down("md")]: {
    ":nth-of-type(even)": {
      borderRight: 0
    }
  },
  [theme.breakpoints.down("sm")]: {
    borderRight: 0,
    justifyContent: "flex-start"
  }
}));