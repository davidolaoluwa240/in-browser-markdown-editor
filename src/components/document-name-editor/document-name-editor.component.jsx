// Modules
import React from "react";

// Hooks
import { useCallback } from "react";
import { useDocument } from "../../hooks";

// Components
import { Fragment } from "react";
import { NotSavedFlag } from "../";

// Style
import {
  DocumentNameEditorWrapper,
  DocumentNameEditorLabel,
  DocumentNameEditorInput,
  DocumentNameEditorInputValueSpinner,
  DocumentNameEditorInputGroup,
  DocumentNameExtension,
  DocumentFileIcon,
} from "./document-name-editor.styles";

export const DocumentNameEditor = () => {
  const {
    document,
    updateDoc,
    documentId,
    isLoading: isDocumentLoading,
    loadingType: documentLoadingType,
  } = useDocument();
  const isFetchingDocuments =
    (isDocumentLoading &&
      (documentLoadingType === "fetching" ||
        documentLoadingType === "adding/default")) ||
    !document?.fileName;
  const isNotSaved = document?.notSavedFlag?.includes("fileName");

  /**
   * Handle Document Name Change
   * @param {Event} event Event
   */
  const handleDocumentNameChange = useCallback(
    (event) => {
      updateDoc(documentId, {
        fileName: event.target.value,
        notSavedFlag: [
          ...new Set([...(document.notSavedFlag || ""), "fileName"]),
        ],
      });
    },
    [document]
  );

  return (
    <DocumentNameEditorWrapper>
      <DocumentFileIcon />
      <DocumentNameEditorInputGroup>
        <DocumentNameEditorLabel>
          Document Name
          <NotSavedFlag isVisible={isNotSaved} />
        </DocumentNameEditorLabel>
        <DocumentNameEditorInputValueSpinner
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
