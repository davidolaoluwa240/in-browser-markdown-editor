// Modules
import React from "react";

// Utils
import { humanReadableDate } from "../../../utils";

// Style
import {
  DocumentFileItemWrapper,
  DocumentFileCreatedTime,
  DocumentFileContent,
  DocumentFileIcon,
} from "./document-file-item.styles";

export const DocumentFileItem = ({ fileName, createdAt }) => {
  return (
    <DocumentFileItemWrapper to={`/${fileName}`}>
      <DocumentFileIcon aria-label={`${fileName} file`} />
      <DocumentFileContent>
        <DocumentFileCreatedTime>
          {humanReadableDate(createdAt)}
        </DocumentFileCreatedTime>
        {fileName}.md
      </DocumentFileContent>
    </DocumentFileItemWrapper>
  );
};
