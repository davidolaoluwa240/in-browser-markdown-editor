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
import { preventIfNotAuth } from "../../hocs/preventIfNotAuth.hocs";

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
} from "./root-layout.styles";

const _RootLayout = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [mainContentStyle, setMainContentStyle] = useState({
    width: window.outerWidth,
  });
  const { dispatch, isSideBarOpen } = useUi();
  const {
    startAddingDocument,
    isLoading,
    loadingType,
    startFetchingDocuments,
  } = useDocument();
  const { theme, handleUpdateTheme } = useContext(ThemeContext);
  const isAddingDocument = isLoading && loadingType === "adding";

  // useEffect(() => {
  //   dispatch(startFetchingDocuments());
  // }, []);

  /**
   * Open Settings Modal
   */
  const handleOpenSettingsModal = useCallback(
    () => setIsSettingsModalOpen(true),
    []
  );

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
      // Remove Event Listener When Component Un-Mount
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
        <DocumentSideBar>
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
            <SettingsIcon onClick={handleOpenSettingsModal} />
          </DocumentFooter>
        </DocumentSideBar>

        <MainContent style={mainContentStyle}>
          <Navbar />
          <Outlet />
        </MainContent>
      </RootLayoutWrapper>
    </Fragment>
  );
};

// Prevent Access If User Is Not Authenticated
export const RootLayout = preventIfNotAuth(_RootLayout);
