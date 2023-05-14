// Modules
import React from "react";

// Hooks
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDocument } from "../../hooks";

// Data
import { DEFAULT_DOCUMENT_ITEM } from "../../data";

// Components
import { Editor } from "../../components";

// Style
import { EditorLayoutWrapper, EditorPanel } from "./editor-layout.styles";

export const EditorLayout = () => {
  const [isMarkdownEditorFullScreen, setIsMarkdownEditorFullScreen] =
    useState(false);
  const [isPreviewEditorFullScreen, setIsPreviewEditorFullScreen] =
    useState(false);
  const { documents, dispatch, setDocuments } = useDocument();
  const navigate = useNavigate();
  const markdownEditorRef = useRef();
  const previewEditorRef = useRef();

  useEffect(() => {
    // Handle Key Press
    const handleKeyPress = (event) => {
      const { key, ctrlKey } = event;

      if ((key === "m" || key === "p") && ctrlKey) {
        // Prevent Browser Default
        event.preventDefault();

        // Get Editor Type Based On Key
        const editorType = key === "m" ? "markdown" : "preview";

        // Toggle Either Markdown/Preview Editor Full Screen Visibility
        toggleEditorFullScreen(editorType);
      }
    };

    // Add Event Listener
    document.addEventListener("keydown", handleKeyPress);

    // Remove Event Listener
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    let id, fileName;
    if (documents.length) {
      ({ id, fileName } = documents[0]);
    } else {
      dispatch(setDocuments([DEFAULT_DOCUMENT_ITEM]));
      id = DEFAULT_DOCUMENT_ITEM.id;
      fileName = DEFAULT_DOCUMENT_ITEM.fileName;
    }
    navigate(`/${id}/${fileName}`, { replace: true });
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
          ref={markdownEditorRef}
          isFullScreen={isMarkdownEditorFullScreen}
          onToggleFullScreen={toggleEditorFullScreen}
        />
      </EditorPanel>

      <EditorPanel shrink={isMarkdownEditorFullScreen}>
        <Editor
          type="preview"
          ref={previewEditorRef}
          isFullScreen={isPreviewEditorFullScreen}
          onToggleFullScreen={toggleEditorFullScreen}
          scrollWithRef={markdownEditorRef}
        />
      </EditorPanel>
    </EditorLayoutWrapper>
  );
};
