// Modules
import React from "react";

// Hooks
import { useDocument } from "../../hooks";

// Components
import { DocumentFileList } from "../";

// Style
import { DocumentFileBaseWrapper } from "./document-file-base.styles";

export const DocumentFileBase = () => {
  const { documents } = useDocument();

  return (
    <DocumentFileBaseWrapper>
      <DocumentFileList items={documents} />
    </DocumentFileBaseWrapper>
  );
};
