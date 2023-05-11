// Modules
import React from "react";

// Hooks
import { useState } from "react";
import { useUi } from "../../hooks";

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
  const [showSavedSuccessText, setShowSavedSuccessText] = useState(false);

  /**
   * Toggle Menu Visibility
   */
  const toggleMenuVisibility = () =>
    dispatch(setSideBarVisibility(!isSideBarOpen));

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
        <Button
          successText="Changes Saved"
          showSuccessText={showSavedSuccessText}
          onClick={handleSaveFileChanges}
        >
          <SaveIcon />
          Save Changes
        </Button>
        <LogoutIcon title="logout" />
      </NavbarAction>
    </NavbarWrapper>
  );
};
