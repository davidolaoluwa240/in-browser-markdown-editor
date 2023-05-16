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
    // Get Markdown Editor Mounted Document Id
    const markdownEditorMountedDocumentId =
      markdownRef.current.dataset.mountedDocumentId;

    // Get Markdown Ref Element
    const markdownRefElm = markdownRef.current;

    if (
      document?.content &&
      document.id !== markdownEditorMountedDocumentId &&
      markdownRefElm
    ) {
      // Update Markdown Editor InnerText
      markdownRefElm.innerText = DOMPurify.sanitize(document.content.trim());

      // Set Markdown Editor Mounted Document Id Attribute
      markdownRefElm.setAttribute("data-mounted-document-id", document.id);
    }

    if (!document?.content && markdownRefElm) {
      // Reset Markdown Editor InnerText
      markdownRefElm.innerText = "";

      // Remove Markdown Editor Mounted Document Id Attribute
      markdownRefElm.removeAttribute("data-mounted-document-id");
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
                lastSavedLocal: Date.now(),
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
