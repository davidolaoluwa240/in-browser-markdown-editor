// Modules
import React from "react";

// Hooks
import { useDocument } from "../../hooks";

// Components
import { DocumentFileList } from "../";

// Style
import {
  DocumentFileBaseWrapper,
  StyledAnimateTailSpin,
} from "./document-file-base.styles";

export const DocumentFileBase = () => {
  const { documents, isLoading, loadingType } = useDocument();
  const isFetchingDocuments = isLoading && loadingType === "fetching";

  return (
    <DocumentFileBaseWrapper>
      {!isFetchingDocuments && <DocumentFileList items={documents} />}
      <StyledAnimateTailSpin
        height="50"
        width="50"
        color="#ffffff"
        ariaLabel="Documents Loading"
        radius="1"
        visible={isFetchingDocuments}
      />
    </DocumentFileBaseWrapper>
  );
};
