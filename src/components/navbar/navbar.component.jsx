// Modules
import React from "react";

// Hooks
import { useUi, useAuth } from "../../hooks";

// Components
import { DocumentNameEditor, Button } from "../";

// Style
import {
  NavbarWrapper,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuIcon,
  NavbarMenuCloseIcon,
  NavbarBrandTitle,
  NavbarAction,
  NavbarDocumentDeleteIcon,
  SaveIcon,
  LogoutIcon,
} from "./navbar.styles";

export const Navbar = () => {
  const { dispatch, isSideBarOpen, setSideBarVisibility } = useUi();
  const { logoutUser } = useAuth();

  /**
   * Toggle Menu Visibility
   */
  const toggleMenuVisibility = () =>
    dispatch(setSideBarVisibility(!isSideBarOpen));

  /**
   * Handle Logout User
   */
  const handleLogoutUser = () => dispatch(logoutUser());

  /**
   * Handle Save File Changes
   */
  const handleSaveFileChanges = () => {};

  return (
    <NavbarWrapper>
      <NavbarBrand>
        <NavbarMenu onClick={toggleMenuVisibility}>
          <NavbarMenuIcon isMenuOpen={isSideBarOpen} />
          <NavbarMenuCloseIcon isMenuOpen={isSideBarOpen} />
        </NavbarMenu>
        <NavbarBrandTitle>Markdown</NavbarBrandTitle>
        <DocumentNameEditor />
      </NavbarBrand>

      <NavbarAction>
        <NavbarDocumentDeleteIcon />
        <Button onClick={handleSaveFileChanges}>
          <SaveIcon />
          Save Changes
        </Button>
        <LogoutIcon title="logout" onClick={handleLogoutUser} />
      </NavbarAction>
    </NavbarWrapper>
  );
};
