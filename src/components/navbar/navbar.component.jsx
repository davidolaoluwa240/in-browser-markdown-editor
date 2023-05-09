// Modules
import React from "react";

// Hooks
import { useState } from "react";

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
} from "./navbar.styles";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSavedSuccessText, setShowSavedSuccessText] = useState(false);

  /**
   * Toggle Menu Visibility
   */
  const toggleMenuVisibility = () => setIsMenuOpen(!isMenuOpen);

  /**
   * Handle Save File Changes
   */
  const handleSaveFileChanges = () => {};

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
      </NavbarAction>
    </NavbarWrapper>
  );
};
