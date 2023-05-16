// Modules
import React from "react";
import { toast } from "react-toastify";

// Hooks
import { useUi, useAuth, useDocument } from "../../hooks";

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
  const {
    document,
    startUpdatingDocument,
    isLoading,
    setDocuments,
    documents,
  } = useDocument();

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
   * Handle Save File Changes To Cloud
   */
  const handleSaveFileChangesToCloud = () => {
    if (document) {
      dispatch(startUpdatingDocument(document));
    }
  };

  // Handle Deleting Document
  const onHandleDeleteDocument = () => {
    if (document.id !== "default") {
      dispatch(
        setDocuments(
          documents.map((doc) =>
            doc.id === document.id ? { ...doc, isActive: false } : doc
          )
        )
      );
    } else {
      toast.warning("Default Document Cannot Be Deleted");
    }
  };

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
        <NavbarDocumentDeleteIcon onClick={onHandleDeleteDocument} />
        <Button isLoading={isLoading} onClick={handleSaveFileChangesToCloud}>
          <SaveIcon />
          Save Changes
        </Button>
        <LogoutIcon title="logout" onClick={handleLogoutUser} />
      </NavbarAction>
    </NavbarWrapper>
  );
};
