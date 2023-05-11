// Modules
import React from "react";

// Hooks
import { useUi } from "../../hooks";

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
  const mainContentStyle = { width: window.innerWidth };

  /**
   * Update Page Theme
   * @param {string} theme Theme
   */
  const handleUpdateTheme = (theme) => dispatch(setTheme(theme));

  return (
    <RootLayoutWrapper showSideBar={isSideBarOpen}>
      <DocumentSideBar>
        <DocumentTitle>MY DOCUMENTS</DocumentTitle>
        <Button widthFull>+ New Document</Button>

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
