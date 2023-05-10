// Modules
import React from "react";

// Hooks
import { useRef } from "react";

// Components
import { Fragment } from "react";
import { EditorHeader, MarkdownEditor, PreviewEditor } from "../";

// Style
import { EditorContent } from "./editor.styles";

export const Editor = ({ type, isFullScreen, onToggleFullScreen }) => {
  const previewRef = useRef();

  const handleMarkdownEditorScroll = (event) => {
    const { scrollTop } = event.target;
  };

  return (
    <Fragment>
      <EditorHeader
        type={type}
        isFullScreen={isFullScreen}
        onToggleFullScreen={onToggleFullScreen}
      />

      <EditorContent
        show={type === "markdown"}
        onScroll={handleMarkdownEditorScroll}
      >
        <MarkdownEditor />
      </EditorContent>

      <EditorContent ref={previewRef} show={type === "preview"}>
        <PreviewEditor />
      </EditorContent>
    </Fragment>
  );
};
