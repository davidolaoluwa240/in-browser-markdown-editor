// Modules
import React from "react";

// Style
import { MarkdownEditorInput } from "./markdown-editor.styles";

export const MarkdownEditor = () => {
  /**
   * Handle Editor Input Change
   */
  const handleEditorInputChange = (event) => {
    console.log(event);
  };

  return (
    <MarkdownEditorInput contentEditable onInput={handleEditorInputChange} />
  );
};
