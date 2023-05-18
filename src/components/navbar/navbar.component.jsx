// Modules
import React from "react";
import { toast } from "react-toastify";

// Hooks
import { useState } from "react";
import { useUi, useAuth, useDocument } from "../../hooks";

// Components
import { Fragment } from "react";
import { DocumentNameEditor, Button, DeleteDocumentModal } from "../";

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
  DownloadIcon,
  LogoutIcon,
} from "./navbar.styles";

export const Navbar = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { dispatch, isSideBarOpen, setSideBarVisibility } = useUi();
  const { logoutUser } = useAuth();
  const {
    document,
    startUpdatingDocument,
    isLoading,
    setDocuments,
    documents,
    activeDocuments,
    startDeletingDocument,
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
    document && dispatch(startUpdatingDocument(document));
  };

  /**
   * Handle Open Delete Document Modal
   */
  const handleOpenDeleteDocumentModal = () => setIsDeleteModalOpen(true);

  /**
   * Handle Close Delete Document Modal
   */
  const handleCloseDeleteDocumentModal = () => setIsDeleteModalOpen(false);

  /**
   * Handle Download Markdown File
   */
  const handleDownloadMarkdownFile = () => {
    console.log(document);
  };

  /**
   * Handle Deleting Document
   */
  const onHandleDeleteDocument = () => {
    if (activeDocuments.length > 1) {
      // Perform Deletion
      dispatch(
        setDocuments(
          documents.map((doc) =>
            doc.id === document.id ? { ...doc, isActive: false } : doc
          )
        )
      );

      // Save Changes To Cloud
      dispatch(startDeletingDocument(document));
    } else {
      toast.error("Operation denied: default document cannot be deleted");
    }

    // Close Delete Document Modal
    handleCloseDeleteDocumentModal();
  };

  return (
    <Fragment>
      <DeleteDocumentModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteDocumentModal}
        onHandleDelete={onHandleDeleteDocument}
      />

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
          <NavbarDocumentDeleteIcon onClick={handleOpenDeleteDocumentModal} />

          <Button onClick={handleDownloadMarkdownFile}>
            <DownloadIcon />
            Download
          </Button>

          <Button isLoading={isLoading} onClick={handleSaveFileChangesToCloud}>
            <SaveIcon />
            Save Changes
          </Button>

          <LogoutIcon title="logout" onClick={handleLogoutUser} />
        </NavbarAction>
      </NavbarWrapper>
    </Fragment>
  );
};
