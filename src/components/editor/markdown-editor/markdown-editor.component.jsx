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
    // Get Markdown Ref Element
    const markdownRefElm = markdownRef.current;

    // Get Markdown Editor Mounted Document Id
    const markdownEditorMountedDocumentId =
      markdownRefElm.dataset.mountedDocumentId;

    if (document.id !== markdownEditorMountedDocumentId && markdownRefElm) {
      // Update Markdown Editor InnerText
      markdownRefElm.innerText = DOMPurify.sanitize(
        document?.content?.trim() || ""
      );

      // Set Markdown Editor Mounted Document Id Attribute
      markdownRefElm.setAttribute("data-mounted-document-id", document.id);
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
            ? {
                ...doc,
                content: event.target.innerText,
              }
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
