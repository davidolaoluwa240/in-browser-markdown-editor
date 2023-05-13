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
    // Get Markdown Editor Active Document Id
    const mardownEditorActiveDocumentId =
      markdownRef.current.dataset.activeDocumentId;

    if (document?.content && document.id !== mardownEditorActiveDocumentId) {
      // Update Markdown Editor InnerText
      markdownRef.current.innerText = DOMPurify.sanitize(document.content);

      // Set Markdown Editor Active Document Id
      markdownRef.current.setAttribute("data-active-document-id", document.id);
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
