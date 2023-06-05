// Modules
import React, { forwardRef } from "react";

// Hooks
import { useEffect } from "react";

// Components
import { Fragment } from "react";
import { EditorHeader, MarkdownEditor, PreviewEditor } from "../";

// Style
import { EditorContent } from "./editor.styles";

export const Editor = forwardRef(
  ({ type, isFullScreen, onToggleFullScreen, scrollWithRef }, ref) => {
    const isMarkdownEditor = type === "markdown";

    useEffect(() => {
      const scrollWithRefElm = scrollWithRef?.current;
      const refElm = ref.current;

      const handleEditorScrolling = (event) => {
        const { scrollTop } = event.target;
        refElm.scrollTop = scrollTop;
      };

      // Register Scroll Event On The ScrollWith Element
      scrollWithRefElm?.addEventListener("scroll", handleEditorScrolling);

      return () => {
        // Un-Register Scroll Event On The ScrollWith Element On Component Un-Mount
        scrollWithRefElm?.removeEventListener("scroll", handleEditorScrolling);
      };
    }, [ref.current, scrollWithRef]);

    return (
      <Fragment>
        <EditorHeader
          type={type}
          isFullScreen={isFullScreen}
          onToggleFullScreen={onToggleFullScreen}
        />

        <EditorContent ref={ref || null}>
          {isMarkdownEditor ? <MarkdownEditor /> : <PreviewEditor />}
        </EditorContent>
      </Fragment>
    );
  }
);

Editor.defaultProps = {
  type: "markdown",
};
