import Link from "next/link";
import { Fragment } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx"; // LOCAL CUSTOM HOOKS

import useHeader from "./hooks/use-header"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import FlexBox from "components/flex-box/flex-box"; // LOCAL CUSTOM COMPONENTS

import MobileHeader from "./components/mobile-header";
import DialogDrawer from "./components/dialog-drawer";
import CategoriesMenu from "./components/categories-menu";
import LoginCartButtons from "./components/login-cart-buttons"; // STYLED COMPONENTS

import { HeaderWrapper, StyledContainer } from "./styles"; // ==============================================================
import { Box } from "@mui/material";
import { Navbar } from "components/navbar";

// ==============================================================
export default function Header2({ isFixed, className, midSlot }) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down(1150));
  const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav } = useHeader();
  const CONTENT_FOR_LARGE_DEVICE = (
    <Fragment>
      {/* LEFT CONTENT - LOGO AND CATEGORY */}
        <FlexBox minWidth={100} alignItems="center">
            <Link href="/">
            <LazyImage
                src={require("../../../public/assets/images/logo-image-dark.png")}
                alt="logo"
                style={{ maxWidth: "95px" }}
            />
            </Link>
        </FlexBox>

        <Box>
            <Navbar elevation={0} border={1} fashin2={true} />
        </Box>

        {/* SEARCH FORM | NAVIGATION */}
        {midSlot}

        {/* LOGIN AND CART BUTTON */}
        <LoginCartButtons
            toggleDialog={toggleDialog}
            toggleSidenav={toggleSidenav}
        />

      {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
        <DialogDrawer
            dialogOpen={dialogOpen}
            sidenavOpen={sidenavOpen}
            toggleDialog={toggleDialog}
            toggleSidenav={toggleSidenav}
        />
    </Fragment>
  );
  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        {downMd ? <MobileHeader /> : CONTENT_FOR_LARGE_DEVICE}
      </StyledContainer>
    </HeaderWrapper>
  );
}
