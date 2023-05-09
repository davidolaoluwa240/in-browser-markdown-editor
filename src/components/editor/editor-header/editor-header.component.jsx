// Modules
import React from "react";

// Style
import { EditorHeaderGroup, EditorHeaderTitle } from "./editor-header.styles";

export const EditorHeader = ({ type }) => {
  return (
    <EditorHeaderGroup>
      <EditorHeaderTitle>{type}</EditorHeaderTitle>
    </EditorHeaderGroup>
  );
};
