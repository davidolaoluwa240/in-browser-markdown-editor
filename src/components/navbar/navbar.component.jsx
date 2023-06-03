// Modules
import React from "react";

// Hooks
import { useState, useCallback } from "react";
import { useUi, useAuth, useDocument } from "../../hooks";

// Components
import { Fragment } from "react";
import { DocumentNameEditor, Button, DeleteDocumentModal } from "../";

// Utils
import { downloadMarkdownFile } from "../../utils";

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
    isLoading,
    loadingType,
    startUpdatingDocument,
    startDeletingDocument,
  } = useDocument();
  const isUpdatingDocument = isLoading && loadingType === "updating";
  const isDeletingDocument = isLoading && loadingType === "deleting";

  /**
   * Handle Toggle Menu Visibility
   */
  const handleToggleMenuVisibility = useCallback(
    () => dispatch(setSideBarVisibility(!isSideBarOpen)),
    [isSideBarOpen]
  );

  /**
   * Handle Logout User
   */
  const handleLogoutUser = useCallback(() => dispatch(logoutUser()), []);

  /**
   * Handle Save File Changes To Cloud
   */
  const handleSaveFileChangesToCloud = useCallback(() => {
    document && dispatch(startUpdatingDocument(document));
  }, [document]);

  /**
   * Handle Open Delete Document Modal
   */
  const handleOpenDeleteDocumentModal = useCallback(
    () => setIsDeleteModalOpen(true),
    []
  );

  /**
   * Handle Close Delete Document Modal
   */
  const handleCloseDeleteDocumentModal = useCallback(
    () => setIsDeleteModalOpen(false),
    []
  );

  /**
   * Handle Download Markdown File
   */
  const handleDownloadMarkdownFile = useCallback(
    () => downloadMarkdownFile(document),
    [document]
  );

  /**
   * Handle Deleting Document
   */
  const onHandleDeleteDocument = useCallback(() => {
    // Perform Deletion
    dispatch(startDeletingDocument(document.id));

    // Close Delete Document Modal
    handleCloseDeleteDocumentModal();
  }, [document]);

  return (
    <Fragment>
      <DeleteDocumentModal
        headingText={"Delete this document?"}
        descriptionText={`Are you sure you want to delete ‘${document?.fileName}.md’ document and its contents? This action cannot be reversed.`}
        isLoading={isDeletingDocument}
        isOpen={isDeleteModalOpen || isDeletingDocument}
        onClose={handleCloseDeleteDocumentModal}
        onHandleDelete={onHandleDeleteDocument}
      />

      <NavbarWrapper>
        <NavbarBrand>
          <NavbarMenu
            isMenuOpen={isSideBarOpen}
            onClick={handleToggleMenuVisibility}
          >
            <NavbarMenuIcon />
            <NavbarMenuCloseIcon />
          </NavbarMenu>
          <NavbarBrandTitle>Markdown</NavbarBrandTitle>
          <DocumentNameEditor />
        </NavbarBrand>

        <NavbarAction>
          <NavbarDocumentDeleteIcon onClick={handleOpenDeleteDocumentModal} />

          <Button secondary onClick={handleDownloadMarkdownFile}>
            <DownloadIcon />
            Download
          </Button>

          <Button
            tertiary
            isLoading={isUpdatingDocument}
            onClick={handleSaveFileChangesToCloud}
          >
            <SaveIcon />
            Save Changes
          </Button>

          <LogoutIcon title="logout" onClick={handleLogoutUser} />
        </NavbarAction>
      </NavbarWrapper>
    </Fragment>
  );
};
