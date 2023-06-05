// Modules
import React from "react";
import * as DOMPurify from "dompurify";

// Hooks
import { useRef, useEffect, useCallback } from "react";
import { useDocument } from "../../../hooks";

// Style
import { MarkdownEditorInput } from "./markdown-editor.styles";

export const MarkdownEditor = () => {
  const { document, updateDoc } = useDocument();
  const markdownRef = useRef();

  useEffect(() => {
    // Get Markdown Ref Element
    const markdownRefElm = markdownRef.current;

    // Get Markdown Editor Mounted Document Id
    const markdownEditorMountedDocumentId =
      markdownRefElm?.dataset.mountedDocumentId;

    const updateMarkdownElInnerText = (value = "") => {
      markdownRefElm.innerText = DOMPurify.sanitize(value);
    };

    // Reset Markdown Element InnerText If Document Does Not Exist
    markdownRefElm && !document && updateMarkdownElInnerText();

    if (
      document &&
      markdownRefElm &&
      document.id !== markdownEditorMountedDocumentId
    ) {
      // Update Markdown Editor InnerText
      updateMarkdownElInnerText(document.content.trim());

      // Set Markdown Editor Mounted Document Id Attribute
      markdownRefElm.setAttribute("data-mounted-document-id", document.id);
    }
  }, [document, markdownRef.current]);

  /**
   * Handle Editor Input Change
   * @param {Event} event Event
   */
  const handleEditorInputChange = useCallback(
    (event) => {
      updateDoc(document.id, {
        content: event.target.innerText,
      });
    },
    [document]
  );

  return (
    <MarkdownEditorInput
      ref={markdownRef}
      contentEditable
      onInput={handleEditorInputChange}
    />
  );
};
