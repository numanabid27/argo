import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled"; // CONSTANT VARIABLES

import { layoutConstant } from "utils/constants";
export const HeaderWrapper = styled("div")(({
  theme
}) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  // borderBottom: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight
  }
}));
export const StyledContainer = styled(Container)({
  gap: 2,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});


export const NavBar = styled('div')({
  ".header":{
    background:"#118F31",
  },
 
  ".css-1xqtfu5-MuiPaper-root-MuiCard-root":{
    // background:"#118F31",
    borderBottom:"unset"
  },
  ".css-1iszfra-MuiButtonBase-root":{
    display:"none"
  },
  ".MuiSvgIcon-root":{
    color:"#fff"
  },
  ".css-10ad9ir":{
    color:"#fff"
  }
})