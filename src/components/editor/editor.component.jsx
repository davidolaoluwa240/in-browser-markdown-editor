// Modules
import React from "react";

// Hooks
import { useRef, useEffect } from "react";

// Components
import { Fragment } from "react";
import { EditorHeader, MarkdownEditor, PreviewEditor } from "../";

// Style
import { EditorContent } from "./editor.styles";

export const Editor = ({
  type,
  isFullScreen,
  onToggleFullScreen,
  onScroll,
  scrollTo,
}) => {
  const previewRef = useRef();
  const markdownRef = useRef();

  useEffect(() => {
    if (scrollTo) {
      // Get Element To Scroll
      const elementToScroll =
        type === "markdown" ? markdownRef.current : previewRef.current;

      // Perform Scrolling
      elementToScroll.scrollTop = scrollTo;
    }
  }, [scrollTo]);

  return (
    <Fragment>
      <EditorHeader
        type={type}
        isFullScreen={isFullScreen}
        onToggleFullScreen={onToggleFullScreen}
      />

      <EditorContent
        ref={markdownRef}
        direction="rtl"
        show={type === "markdown"}
        onScroll={onScroll}
      >
        <MarkdownEditor />
      </EditorContent>

      <EditorContent
        ref={previewRef}
        show={type === "preview"}
        onScroll={onScroll}
      >
        <PreviewEditor />
      </EditorContent>
    </Fragment>
  );
};

Editor.defaultProps = {
  type: "markdown",
  onScroll: () => null,
  scrollTo: 0,
};
