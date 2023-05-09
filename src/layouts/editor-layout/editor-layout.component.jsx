// Modules
import React from "react";

// Hooks
import { useState } from "react";

// Components
import { Editor } from "../../components";

// Style
import { EditorLayoutWrapper, EditorPanel } from "./editor-layout.styles";

export const EditorLayout = () => {
  const [editorFullScreenState, setEditorFullScreenState] = useState({
    markdown: false,
    preview: false,
  });

  /**
   * Toggle Editor Full Screen Mode
   * @param {string} editorType Editor type
   */
  const toggleEditorFullScreen = (editorType) => {
    switch (editorType) {
      case "preview":
        return setEditorFullScreenState(({ preview }) => ({
          markdown: false,
          preview: !preview,
        }));
      case "markdown":
        return setEditorFullScreenState(({ markdown }) => ({
          preview: false,
          markdown: !markdown,
        }));
    }
  };

  return (
    <EditorLayoutWrapper>
      <EditorPanel isFullScreen={editorFullScreenState.markdown}>
        <Editor
          type="markdown"
          isFullScreen={editorFullScreenState.markdown}
          onToggleFullScreen={toggleEditorFullScreen}
        />
      </EditorPanel>

      <EditorPanel isFullScreen={editorFullScreenState.preview}>
        <Editor
          type="preview"
          isFullScreen={editorFullScreenState.preview}
          onToggleFullScreen={toggleEditorFullScreen}
        />
      </EditorPanel>
    </EditorLayoutWrapper>
  );
};
