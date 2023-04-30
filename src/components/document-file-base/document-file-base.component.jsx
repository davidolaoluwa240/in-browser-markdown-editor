// Modules
import React from "react";

// Data
import { DOCUMENT_ITEMS } from "../../data";

// Components
import { DocumentFileList } from "../";

// Style
import { DocumentFileBaseWrapper } from "./document-file-base.styles";

export const DocumentFileBase = () => {
  return (
    <DocumentFileBaseWrapper>
      <DocumentFileList items={DOCUMENT_ITEMS} />
    </DocumentFileBaseWrapper>
  );
};
