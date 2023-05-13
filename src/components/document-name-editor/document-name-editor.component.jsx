// Modules
import React from "react";

// Hooks
import { useEffect, useRef } from "react";
import { useDocument } from "../../hooks";

// Style
import { DocumentFileIcon } from "../document-file-base/document-file-item/document-file-item.styles";
import {
  DocumentNameEditorWrapper,
  DocumentNameEditorLabel,
  DocumentNameEditorInput,
  DocumentNameEditorInputGroup,
  DocumentNameExtension,
} from "./document-name-editor.styles";

export const DocumentNameEditor = () => {
  const documentControlRef = useRef();
  const { dispatch, documents, document, setDocuments } = useDocument();

  useEffect(() => {
    // Get Document Name Active Document Id
    const documentNameActiveDocumentId =
      documentControlRef.current.dataset.activeDocumentId;

    if (document?.fileName && document.id !== documentNameActiveDocumentId) {
      // Update Document Name Editor Input InnerText
      documentControlRef.current.innerText = document.fileName;

      // Set Document Name Editor Active Document Id
      documentControlRef.current.setAttribute(
        "data-active-document-id",
        document.id
      );
    }
  }, [document]);

  /**
   * Handle Document Name Change
   * @param {Event} event Event
   */
  const handleDocumentNameChange = (event) => {
    dispatch(
      setDocuments(
        documents.map((doc) =>
          doc.id === document.id
            ? { ...doc, fileName: event.target.innerText }
            : doc
        )
      )
    );
  };

  return (
    <DocumentNameEditorWrapper>
      <DocumentFileIcon />
      <DocumentNameEditorInputGroup>
        <DocumentNameEditorLabel>Document Name</DocumentNameEditorLabel>
        <DocumentNameEditorInput
          ref={documentControlRef}
          contentEditable
          onInput={handleDocumentNameChange}
        />
        <DocumentNameExtension>.md</DocumentNameExtension>
      </DocumentNameEditorInputGroup>
    </DocumentNameEditorWrapper>
  );
};
