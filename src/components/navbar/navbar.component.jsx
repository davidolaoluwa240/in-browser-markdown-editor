// Modules
import React from "react";

// Hooks
import { useState } from "react";

// Components
import { DocumentNameEditor } from "../";

// Style
import {
  NavbarWrapper,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuIcon,
  NavbarMenuCloseIcon,
  NavbarBrandTitle,
} from "./navbar.styles";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggle Menu Visibility
   */
  const toggleMenuVisibility = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavbarWrapper>
      <NavbarBrand>
        <NavbarMenu onClick={toggleMenuVisibility}>
          <NavbarMenuIcon isMenuOpen={isMenuOpen} />
          <NavbarMenuCloseIcon isMenuOpen={isMenuOpen} />
        </NavbarMenu>
        <NavbarBrandTitle>Markdown</NavbarBrandTitle>
        <DocumentNameEditor />
      </NavbarBrand>
    </NavbarWrapper>
  );
};
