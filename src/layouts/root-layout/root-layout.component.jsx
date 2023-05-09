// Modules
import React from "react";

// Hooks
import { useState } from "react";

// Components
import { Outlet } from "react-router-dom";
import {
  Button,
  ThemeToggle,
  DocumentFileBase,
  Navbar,
} from "../../components";

// Style
import {
  RootLayoutWrapper,
  DocumentSideBar,
  DocumentTitle,
  DocumentFooter,
  MainContent,
} from "./root-layout.styles";

export const RootLayout = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <RootLayoutWrapper>
      <DocumentSideBar>
        <DocumentTitle>MY DOCUMENTS</DocumentTitle>
        <Button widthFull>+ New Document</Button>

        <DocumentFileBase />

        <DocumentFooter>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </DocumentFooter>
      </DocumentSideBar>

      <MainContent>
        <Navbar />
        <Outlet />
      </MainContent>
    </RootLayoutWrapper>
  );
};
