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
    useEffect(() => {
      const scrollWithRefElm = scrollWithRef?.current;
      const refElm = ref?.current;

      const handleEditorScrolling = (event) => {
        const { scrollTop } = event.target;
        refElm.scrollTop = scrollTop;
      };

      if (!scrollWithRefElm) return;

      scrollWithRefElm.addEventListener("scroll", handleEditorScrolling);

      return () => {
        if (scrollWithRefElm)
          scrollWithRefElm.removeEventListener("scroll", handleEditorScrolling);
      };
    }, [ref, scrollWithRef]);

    return (
      <Fragment>
        <EditorHeader
          type={type}
          isFullScreen={isFullScreen}
          onToggleFullScreen={onToggleFullScreen}
        />

        <EditorContent
          ref={type === "markdown" ? ref : null}
          direction="rtl"
          show={type === "markdown"}
        >
          <MarkdownEditor />
        </EditorContent>

        <EditorContent
          ref={type === "preview" ? ref : null}
          show={type === "preview"}
        >
          <PreviewEditor />
        </EditorContent>
      </Fragment>
    );
  }
);

Editor.defaultProps = {
  type: "markdown",
};
