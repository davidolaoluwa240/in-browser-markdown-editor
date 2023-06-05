// Modules
import React from "react";

// Hooks
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDocument, useUi } from "../../hooks";

// Components
import { Editor, EditorSpinner } from "../../components";

// Style
import { EditorLayoutWrapper, EditorPanel } from "./editor-layout.styles";

export const EditorLayout = () => {
  const {
    editorFullScreen: { markdown, preview },
    scrollWith,
    handleUpdateEditorFullScreen,
  } = useUi();
  const [editorPanelBorderClass, setEditorPanelBorderClass] = useState(
    "editor-panel--border-right"
  );
  const {
    documents,
    document,
    isLoading: isDocumentLoading,
    loadingType: documentLoadingType,
  } = useDocument();
  const markdownEditorRef = useRef();
  const previewEditorRef = useRef();
  const navigate = useNavigate();
  const isMarkdownEditorFullScreen = markdown === "on";
  const isPreviewEditorFullScreen = preview === "on";
  const isScrollWithMarkdown = scrollWith === "markdown";
  const isFetchingDocuments =
    isDocumentLoading &&
    (documentLoadingType === "fetching" ||
      documentLoadingType === "adding/default");

  /**
   * Handle Toggle Editor Panel Border Class
   */
  const handleToggleBorderClass = useCallback(() => {
    setEditorPanelBorderClass(
      isMarkdownEditorFullScreen || isPreviewEditorFullScreen
        ? ""
        : "editor-panel--border-right"
    );
  }, [isMarkdownEditorFullScreen, isPreviewEditorFullScreen]);

  useEffect(() => {
    // Handle Key Press
    const handleKeyPress = (event) => {
      const { key, ctrlKey } = event;

      if ((key === "m" || key === "p") && ctrlKey) {
        // Prevent Browser Default
        event.preventDefault();

        // Get Editor Type Based On Key
        const editorType = key === "m" ? "markdown" : "preview";

        // Toggle Editor Type Value
        const editorValue =
          key === "m"
            ? isMarkdownEditorFullScreen
              ? "off"
              : "on"
            : isPreviewEditorFullScreen
            ? "off"
            : "on";

        // Toggle Either Markdown/Preview Editor Full Screen Visibility
        handleUpdateEditorFullScreen(editorType, editorValue);
      }
    };

    // Register Keydown Event Listener On The Window
    window.addEventListener("keydown", handleKeyPress);

    // Un-Register Keydown Event Listener On The Window
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (!document && documents.length) {
      const { id, fileName } = documents[0];
      navigate(`/${id}/${fileName}`, { replace: true });
    }
  }, [document, documents]);

  return (
    <EditorLayoutWrapper>
      <EditorSpinner isLoading={isFetchingDocuments} />

      <EditorPanel
        className={editorPanelBorderClass}
        shrink={isPreviewEditorFullScreen}
        onTransitionEnd={handleToggleBorderClass}
      >
        <Editor
          ref={markdownEditorRef}
          scrollWithRef={!isScrollWithMarkdown && previewEditorRef}
          isFullScreen={isMarkdownEditorFullScreen}
          onToggleFullScreen={handleUpdateEditorFullScreen}
        />
      </EditorPanel>

      <EditorPanel shrink={isMarkdownEditorFullScreen}>
        <Editor
          type="preview"
          ref={previewEditorRef}
          isFullScreen={isPreviewEditorFullScreen}
          scrollWithRef={isScrollWithMarkdown && markdownEditorRef}
          onToggleFullScreen={handleUpdateEditorFullScreen}
        />
      </EditorPanel>
    </EditorLayoutWrapper>
  );
};
