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

export const DocumentFileItem = ({ id, fileName, createdAt }) => {
  return (
    <DocumentFileItemWrapper to={`/${id}/${fileName}`}>
      <DocumentFileIcon aria-label={`${fileName} markdown`} />
      <DocumentFileContent>
        <DocumentFileCreatedTime>
          {humanReadableDate(createdAt)}
        </DocumentFileCreatedTime>
        {fileName}.md
      </DocumentFileContent>
    </DocumentFileItemWrapper>
  );
};
