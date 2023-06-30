// Modules
import React from "react";

// Hooks
import { useState, useCallback, useEffect } from "react";
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
  NavbarAuthLogoutIcon,
  NavbarActionButtonBaseMobileWrapper,
} from "./navbar.styles";

export const Navbar = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { dispatch, isSideBarOpen, handleToggleMenuVisibility } = useUi();
  const { handleLogoutUser } = useAuth();
  const {
    document,
    isLoading,
    loadingType,
    startUpdatingDocument,
    startDeletingDocument,
    handleDownloadMarkdownFile,
  } = useDocument();
  const isUpdatingDocument = isLoading && loadingType === "updating";
  const isDeletingDocument = isLoading && loadingType === "deleting";

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
   * Handle Deleting Document
   */
  const onHandleDeleteDocument = useCallback(() => {
    // Perform Deletion
    dispatch(startDeletingDocument(document.id));

    // Close Delete Document Modal
    handleCloseDeleteDocumentModal();
  }, [document]);

  useEffect(() => {
    const saveOnKeyPress = (event) => {
      const { key, ctrlKey } = event;
      if (key === "s" && ctrlKey) {
        event.preventDefault();
        handleSaveFileChangesToCloud();
      }
    };

    // Register Keypress Event On The Window
    window.addEventListener("keydown", saveOnKeyPress);

    // Un-Register Keypress Event On The Window When Component Un-Mount
    return () => window.removeEventListener("keydown", saveOnKeyPress);
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

          <NavbarActionButtonBaseMobileWrapper>
            <Button secondary onClick={handleDownloadMarkdownFile}>
              <DownloadIcon />
            </Button>

            <Button
              tertiary
              isLoading={isUpdatingDocument}
              onClick={handleSaveFileChangesToCloud}
            >
              <SaveIcon />
            </Button>
          </NavbarActionButtonBaseMobileWrapper>

          <NavbarAuthLogoutIcon title="logout" onClick={handleLogoutUser} />
        </NavbarAction>
      </NavbarWrapper>
    </Fragment>
  );
};
