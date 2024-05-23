"use client";

import styled from "@mui/material/styles/styled"; // STYLED COMPONENTS

export const StyledRoot = styled("div")(({
  theme
}) => ({
  
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