// Modules
import React from "react";

// Hooks
import { useState } from "react";
import { useUi, useDocument } from "../../hooks";

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
  const [isSettingsModal, setIsSettingsModalOpen] = useState(false);
  const { dispatch, theme, setTheme, isSideBarOpen } = useUi();
  const { documents, setDocuments, startUpdatingDocument } = useDocument();
  const mainContentStyle = { width: window.innerWidth };

  /**
   * Update Page Theme
   * @param {string} theme Theme
   */
  const handleUpdateTheme = (theme) => dispatch(setTheme(theme));

  /**
   * Open Settings Modal
   */
  const handleOpenSettingsModal = () => setIsSettingsModalOpen(true);

  /**
   * Close Settings Modal
   */
  const handleCloseSettingsModal = () => setIsSettingsModalOpen(false);

  /**
   * Handle Add New Document
   */
  const handleAddNewDocument = () => {
    // Perform Creating New Documents
    const newDocument = createNewDocument();
    dispatch(setDocuments([...documents, newDocument]));

    // Sync Created Document To Cloud
    dispatch(startUpdatingDocument(newDocument));
  };

  return (
    <Fragment>
      <SettingsModal
        isOpen={isSettingsModal}
        onClose={handleCloseSettingsModal}
      />

      <RootLayoutWrapper showSideBar={isSideBarOpen}>
        <DocumentSideBar>
          <DocumentTitle>MY DOCUMENTS</DocumentTitle>
          <Button widthFull onClick={handleAddNewDocument}>
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
