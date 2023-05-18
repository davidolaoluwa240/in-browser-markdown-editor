// Modules
import React from "react";

// Hooks
import { useDocument } from "../../hooks";

// Components
import { DocumentFileList } from "../";

// Style
import { DocumentFileBaseWrapper } from "./document-file-base.styles";

export const DocumentFileBase = () => {
  const { activeDocuments } = useDocument();

  return (
    <DocumentFileBaseWrapper>
      <DocumentFileList items={activeDocuments} />
    </DocumentFileBaseWrapper>
  );
};
