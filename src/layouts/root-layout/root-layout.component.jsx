// Modules
import React from "react";

// Hooks
import { useState, useContext, useCallback, useEffect } from "react";
import { useUi, useDocument } from "../../hooks";

// Contexts
import { ThemeContext } from "styled-components";

// Components
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  Button,
  DocumentFileBase,
  Navbar,
  ThemeToggle,
  SettingsModal,
} from "../../components";

// Hocs
import { preventIfNotAuth } from "../../hocs";

// Utils
import { createNewDocument } from "../../utils";

// Style
import {
  RootLayoutWrapper,
  DocumentSideBar,
  DocumentTitle,
  DocumentFooter,
  MainContent,
  SettingsIcon,
  DocumentDownloadIcon,
  AuthLogoutIcon,
  DocumentSideBarMobileOverlay,
  DocumentSideBarCloseIcon,
  DocumentSideBarCloseIconContainer,
} from "./root-layout.styles";

export const RootLayout = preventIfNotAuth(() => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [mainContentStyle, setMainContentStyle] = useState({
    width: window.outerWidth,
  });
  const {
    dispatch,
    isSideBarOpen,
    handleToggleMenuVisibility,
    isTabletDevice,
  } = useUi();
  const {
    startAddingDocument,
    handleDownloadMarkdownFile,
    isLoading: isDocumentLoading,
    loadingType: documentLoadingType,
  } = useDocument();
  const { theme, handleUpdateTheme } = useContext(ThemeContext);
  const isAddingDocument =
    isDocumentLoading && documentLoadingType === "adding";

  /**
   * Open Settings Modal
   */
  const handleOpenSettingsModal = useCallback(() => {
    setIsSettingsModalOpen(true);
    handleToggleMenuVisibility();
  }, [isSideBarOpen]);

  /**
   * Close Settings Modal
   */
  const handleCloseSettingsModal = useCallback(
    () => setIsSettingsModalOpen(false),
    []
  );

  /**
   * Handle Add New Document
   */
  const handleAddNewDocument = useCallback(() => {
    dispatch(startAddingDocument(createNewDocument()));
  }, []);

  useEffect(() => {
    /**
     * Handle Window View Resize
     */
    const handleWindowResize = () => {
      setMainContentStyle({ width: window.outerWidth });
    };

    // Register Resize Event On The Window Object
    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Un-Register Resize Event On The Window When Component Un-Mount
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Fragment>
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={handleCloseSettingsModal}
      />

      <RootLayoutWrapper showSideBar={isSideBarOpen}>
        <DocumentSideBarMobileOverlay onClick={handleToggleMenuVisibility} />
        <DocumentSideBar>
          <DocumentSideBarCloseIconContainer
            title="close sidebar"
            showCloseIcon={isTabletDevice}
            onClick={handleToggleMenuVisibility}
          >
            <DocumentSideBarCloseIcon />
          </DocumentSideBarCloseIconContainer>

          <DocumentTitle>MY DOCUMENTS</DocumentTitle>
          <Button
            isLoading={isAddingDocument}
            widthFull
            secondary
            onClick={handleAddNewDocument}
          >
            + New Document
          </Button>

          <DocumentFileBase />

          <DocumentFooter>
            <ThemeToggle theme={theme} setTheme={handleUpdateTheme} />
            <Button secondary onClick={handleDownloadMarkdownFile}>
              <DocumentDownloadIcon />
            </Button>
            <SettingsIcon onClick={handleOpenSettingsModal} />
            <AuthLogoutIcon />
          </DocumentFooter>
        </DocumentSideBar>

        <MainContent style={mainContentStyle}>
          <Navbar />
          <Outlet />
        </MainContent>
      </RootLayoutWrapper>
    </Fragment>
  );
});
