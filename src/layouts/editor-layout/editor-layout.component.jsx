// Modules
import React from "react";

// Hooks
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDocument, useUi } from "../../hooks";

// Components
import { Editor } from "../../components";

// Style
import { EditorLayoutWrapper, EditorPanel } from "./editor-layout.styles";

export const EditorLayout = () => {
  const { editorFullScreen, setEditorFullScreen } = useUi();
  const { documents, dispatch, document } = useDocument();
  const markdownEditorRef = useRef();
  const previewEditorRef = useRef();
  const navigate = useNavigate();
  const isMarkdownEditorFullScreen = editorFullScreen.markdown === "on";
  const isPreviewEditorFullScreen = editorFullScreen.preview === "on";

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
    if (!document && documents.length) {
      const { id, fileName } = documents[0];
      navigate(`/${id}/${fileName}`, { replace: true });
    }
  }, [document, documents]);

  /**
   * Toggle Editor Full Screen Mode
   * @param {string} editorType Editor type
   */
  const toggleEditorFullScreen = (editorType) => {
    switch (editorType) {
      case "preview":
        dispatch(
          setEditorFullScreen({
            markdown: "off",
            preview: isPreviewEditorFullScreen ? "off" : "on",
          })
        );
        break;
      case "markdown":
        dispatch(
          setEditorFullScreen({
            markdown: isMarkdownEditorFullScreen ? "off" : "on",
            preview: "off",
          })
        );
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
