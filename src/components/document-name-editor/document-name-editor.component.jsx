// Modules
import React from "react";

// Hooks
import { useDocument } from "../../hooks";

// Components
import { Fragment } from "react";

// Style
import {
  DocumentNameEditorWrapper,
  DocumentNameEditorLabel,
  DocumentNameEditorInput,
  DocumentNameEditorInputValueLoader,
  DocumentNameEditorInputGroup,
  DocumentNameExtension,
  DocumentFileIcon,
} from "./document-name-editor.styles";

export const DocumentNameEditor = () => {
  const { document, updateDoc, documentId, isLoading, loadingType } =
    useDocument();
  const isFetchingDocuments =
    isLoading &&
    (loadingType === "fetching" || loadingType === "adding/default");

  /**
   * Handle Document Name Change
   * @param {Event} event Event
   */
  const handleDocumentNameChange = (event) => {
    updateDoc(documentId, { fileName: event.target.value });
  };

  return (
    <DocumentNameEditorWrapper>
      <DocumentFileIcon />
      <DocumentNameEditorInputGroup>
        <DocumentNameEditorLabel>Document Name</DocumentNameEditorLabel>
        <DocumentNameEditorInputValueLoader
          height="30"
          width="40"
          radius="9"
          color="#ffffff"
          ariaLabel="Loading"
          visible={isFetchingDocuments}
        />

        {!isFetchingDocuments && (
          <Fragment>
            <DocumentNameEditorInput
              html={document?.fileName}
              tagName="span"
              onChange={handleDocumentNameChange}
            />
            <DocumentNameExtension>.md</DocumentNameExtension>
          </Fragment>
        )}
      </DocumentNameEditorInputGroup>
    </DocumentNameEditorWrapper>
  );
};
