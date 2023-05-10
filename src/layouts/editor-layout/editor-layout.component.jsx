// Modules
import React from "react";

// Hooks
import { useState, useEffect } from "react";

// Components
import { Editor } from "../../components";

// Style
import { EditorLayoutWrapper, EditorPanel } from "./editor-layout.styles";

export const EditorLayout = () => {
  const [isMarkdownEditorFullScreen, setIsMarkdownEditorFullScreen] =
    useState(false);
  const [isPreviewEditorFullScreen, setIsPreviewEditorFullScreen] =
    useState(false);

  useEffect(() => {
    // Handle Key Press
    const handleKeyPress = (event) => {
      const { key } = event;

      if (key === "m" || key === "p") {
        const editorType = key === "m" ? "markdown" : "preview";
        toggleEditorFullScreen(editorType);
      }
    };

    // Add Event Listener
    document.addEventListener("keydown", handleKeyPress);

    // Remove Event Listener
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  /**
   * Toggle Editor Full Screen Mode
   * @param {string} editorType Editor type
   */
  const toggleEditorFullScreen = (editorType) => {
    switch (editorType) {
      case "preview":
        setIsPreviewEditorFullScreen((prevState) => !prevState);
        setIsMarkdownEditorFullScreen(false);
        break;
      case "markdown":
        setIsMarkdownEditorFullScreen((prevState) => !prevState);
        setIsPreviewEditorFullScreen(false);
        break;
    }
  };

  return (
    <EditorLayoutWrapper>
      <EditorPanel shrink={isPreviewEditorFullScreen}>
        <Editor
          type="markdown"
          isFullScreen={isMarkdownEditorFullScreen}
          onToggleFullScreen={toggleEditorFullScreen}
        />
      </EditorPanel>

      <EditorPanel shrink={isMarkdownEditorFullScreen}>
        <Editor
          type="preview"
          isFullScreen={isPreviewEditorFullScreen}
          onToggleFullScreen={toggleEditorFullScreen}
        />
      </EditorPanel>
    </EditorLayoutWrapper>
  );
};
