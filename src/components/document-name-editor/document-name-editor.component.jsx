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
    // Get Document Name Mounted Document Id
    const documentNameMountedDocumentId =
      documentControlRef.current.dataset.mountedDocumentId;

    // Get Document Control Ref Element
    const documentControlRefElm = documentControlRef.current;

    if (
      document?.fileName &&
      document.id !== documentNameMountedDocumentId &&
      documentControlRefElm
    ) {
      // Update Document Name Editor Input InnerText
      documentControlRefElm.innerText = document.fileName;

      // Set Document Name Editor Mounted Document Id Attribute
      documentControlRefElm.setAttribute(
        "data-mounted-document-id",
        document.id
      );
    }

    if (!document?.content && documentControlRefElm) {
      // Reset Document Name Editor InnerText
      documentControlRefElm.innerText = "";

      // Remove Document Name Editor Mounted Document Id Attribute
      documentControlRefElm.removeAttribute("data-mounted-document-id");
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
            ? {
                ...doc,
                fileName: event.target.innerText,
                lastSavedLocal: Date.now(),
              }
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
