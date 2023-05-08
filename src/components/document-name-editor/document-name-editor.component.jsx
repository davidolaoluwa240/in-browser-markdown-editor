// Modules
import React from "react";

// Hooks
import { useState } from "react";
import { useParams } from "react-router-dom";

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
  const { documentName } = useParams();
  const [documentNameControl, setDocumentNameControl] = useState(documentName);

  /**
   * Handle Document Name Change
   * @param {Event} event Input event
   */
  const handleDocumentNameChange = (event) => console.log(event.target.value);

  return (
    <DocumentNameEditorWrapper>
      <DocumentFileIcon />
      <DocumentNameEditorInputGroup>
        <DocumentNameEditorLabel>Document Name</DocumentNameEditorLabel>
        <DocumentNameEditorInput contentEditable>
          {documentNameControl}
        </DocumentNameEditorInput>
        <DocumentNameExtension>.md</DocumentNameExtension>
      </DocumentNameEditorInputGroup>
    </DocumentNameEditorWrapper>
  );
};
