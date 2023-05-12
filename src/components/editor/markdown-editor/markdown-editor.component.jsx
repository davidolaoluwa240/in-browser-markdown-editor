// Modules
import React from "react";
import * as DOMPurify from "dompurify";

// Hooks
import { useRef, useEffect } from "react";
import { useDocument } from "../../../hooks";

// Style
import { MarkdownEditorInput } from "./markdown-editor.styles";

export const MarkdownEditor = () => {
  const { document, dispatch, documents, setDocuments } = useDocument();
  const markdownRef = useRef();

  useEffect(() => {
    if (document?.content && !markdownRef.current.innerText) {
      markdownRef.current.innerText = DOMPurify.sanitize(
        document?.content || ""
      );
    }
  }, [document]);

  /**
   * Handle Editor Input Change
   * @param {Event} event Event
   */
  const handleEditorInputChange = (event) => {
    dispatch(
      setDocuments(
        documents.map((doc) =>
          doc.id === document.id
            ? { ...doc, content: event.target.innerText }
            : doc
        )
      )
    );
  };

  return (
    <MarkdownEditorInput
      ref={markdownRef}
      contentEditable
      onInput={handleEditorInputChange}
    />
  );
};
