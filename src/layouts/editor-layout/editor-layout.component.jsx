// Modules
import React from "react";

// Hooks
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDocument } from "../../hooks";

// Components
import { Editor } from "../../components";

// Utils
import { createNewDocument } from "../../utils";

// Style
import { EditorLayoutWrapper, EditorPanel } from "./editor-layout.styles";

export const EditorLayout = () => {
  const [isMarkdownEditorFullScreen, setIsMarkdownEditorFullScreen] =
    useState(false);
  const [isPreviewEditorFullScreen, setIsPreviewEditorFullScreen] =
    useState(false);
  const {
    documents,
    activeDocuments,
    dispatch,
    setDocuments,
    document,
    startUpdatingDocument,
  } = useDocument();
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
    window.addEventListener("keydown", handleKeyPress);

    // Remove Event Listener
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (!document) {
      let id, fileName;

      if (activeDocuments.length) {
        ({ id, fileName } = activeDocuments[0]);
      } else {
        // Create New Document
        const newDocument = createNewDocument();

        // Update Documents
        dispatch(setDocuments([...documents, newDocument]));
        ({ id, fileName } = newDocument);

        // Sync Created Document To Cloud
        dispatch(startUpdatingDocument(newDocument));
      }
      navigate(`/${id}/${fileName}`, { replace: true });
    }
  }, [document]);

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
