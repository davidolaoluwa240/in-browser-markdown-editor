// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { DocumentFileItem } from "../../";

export const DocumentFileList = ({ items }) => {
  // Document File Items
  const renderedDocumentFileItems = items.map(({ id, fileName, createdAt }) => (
    <DocumentFileItem
      key={id}
      id={id}
      fileName={fileName}
      createdAt={createdAt}
    />
  ));

  return <Fragment>{renderedDocumentFileItems}</Fragment>;
};
