// Modules
import React from "react";

// Hooks
import { useState, useEffect } from "react";
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
  const [markdownEditorScrollTop, setMarkdownEditorScrollTop] = useState(0);
  const navigate = useNavigate();
  const { documents, dispatch, setDocuments } = useDocument();

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

  /**
   * Handle Scroll Markdown Editor With Preview Editor
   * @param {Event} event Event
   */
  const scrollMarkdownEditorWithPreviewEditor = (event) => {
    const { scrollTop } = event.target;

    // Update Markdown Scroll Position State
    setMarkdownEditorScrollTop(scrollTop);
  };

  return (
    <EditorLayoutWrapper>
      <EditorPanel shrink={isPreviewEditorFullScreen}>
        <Editor
          type="markdown"
          isFullScreen={isMarkdownEditorFullScreen}
          onToggleFullScreen={toggleEditorFullScreen}
          onScroll={scrollMarkdownEditorWithPreviewEditor}
        />
      </EditorPanel>

      <EditorPanel shrink={isMarkdownEditorFullScreen}>
        <Editor
          type="preview"
          isFullScreen={isPreviewEditorFullScreen}
          onToggleFullScreen={toggleEditorFullScreen}
          scrollTo={markdownEditorScrollTop}
        />
      </EditorPanel>
    </EditorLayoutWrapper>
  );
};
