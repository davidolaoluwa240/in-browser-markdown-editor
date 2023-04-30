// Modules
import React from "react";

// Hooks
import { useState } from "react";

// Components
import { Button, ThemeToggle, DocumentFileBase } from "../../components";

// Style
import {
  RootLayoutWrapper,
  DocumentSideBar,
  DocumentTitle,
  DocumentFooter,
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
    </RootLayoutWrapper>
  );
};
