// Modules
import React from "react";

// Hooks
import { useMemo } from "react";
import { useUi, useDocument } from "../../hooks";

// Components
import { Outlet } from "react-router-dom";
import {
  Button,
  ThemeToggle,
  DocumentFileBase,
  Navbar,
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
} from "./root-layout.styles";

const _RootLayout = () => {
  const { dispatch, setTheme, theme, isSideBarOpen } = useUi();
  const { documents, setDocuments, startUpdatingDocument } = useDocument();
  const mainContentStyle = useMemo(() => ({ width: window.innerWidth }), []);

  /**
   * Update Page Theme
   * @param {string} theme Theme
   */
  const handleUpdateTheme = (theme) => dispatch(setTheme(theme));

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
    <RootLayoutWrapper showSideBar={isSideBarOpen}>
      <DocumentSideBar>
        <DocumentTitle>MY DOCUMENTS</DocumentTitle>
        <Button widthFull onClick={handleAddNewDocument}>
          + New Document
        </Button>

        <DocumentFileBase />

        <DocumentFooter>
          <ThemeToggle theme={theme} setTheme={handleUpdateTheme} />
        </DocumentFooter>
      </DocumentSideBar>

      <MainContent style={mainContentStyle}>
        <Navbar />
        <Outlet />
      </MainContent>
    </RootLayoutWrapper>
  );
};

// Prevent Access If User Is Not Authenticated
export const RootLayout = preventIfNotAuth(_RootLayout);
