import MenuItem from "@mui/material/MenuItem"; // MUI ICON COMPONENTS

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; // GLOBAL CUSTOM COMPONENTS

import { NavLink } from "components/nav-link";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard"; // LOCAL CUSTOM COMPONENTS

import MegaMenu from "../mega-menu";
import NavItemChild from "./nav-item-child";
import CategoryBasedMenu from "../category-based-menu"; // NAVIGATION DATA LIST

import navigation from "data/navbarNavigation"; // STYLED COMPONENTS

import { StyledNavLink, NAV_LINK_STYLES, ChildNavListWrapper } from "../styles"; // DATA TYPES

export default function NavigationList2() {
  const renderNestedNav = (list = [], isRoot = false) => {
    // console.log("..,//,/", list)
    return list.map(nav => {
      if (isRoot) {
        // SHOW MEGA MENU
        // if (nav.megaMenu) {
        //   return <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />;
        // } // SHOW MEGA MENU WITH SUB ITEMS


        if (nav.megaMenuWithSub) {
          return <CategoryBasedMenu key={nav.title} title={nav.title} menuList={nav.child} />;
        }

        if (nav.url) {
          return <StyledNavLink href={nav.url} key={nav.title} color="#fff">
              {nav.title}
            </StyledNavLink>;
        }

        if (nav.child) {
          return <FlexBox key={nav.title} alignItems="center" position="relative" flexDirection="column" sx={{
            "&:hover": {
              "& > .child-nav-item": {
                display: "block"
              }
            }
          }}>
              <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES} color="#fff">
                {nav.title} 
              </FlexBox>

             
            </FlexBox>;
        }
      }
    });
  };

  return <FlexBox gap={4}>{renderNestedNav(navigation, true)}</FlexBox>;
}