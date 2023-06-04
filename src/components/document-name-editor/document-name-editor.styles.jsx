// Modules
import styled from "styled-components";

// Components
import ContentEditable from "react-contenteditable";
import { AnimateThreeDots } from "../";

// Styles
import { DocumentFileIcon } from "../document-file-base/document-file-item/document-file-item.styles";

export const DocumentNameEditorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.4rem;

  ${DocumentFileIcon} {
    margin-right: 1.6rem;
    color: white;
  }
`;

export const DocumentNameEditorInputGroup = styled.div`
  color: #ffffff;
`;

export const DocumentNameEditorLabel = styled.label`
  display: block;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 15px;
  font-family: "Roboto", sans-serif;
  color: #adb5bd;
`;

export const DocumentNameExtension = styled.span`
  line-height: 18px;
`;

export const DocumentNameEditorInput = styled(ContentEditable)`
  border: none;
  outline: none;
  caret-color: #e46643;
`;

export const DocumentNameEditorInputValueLoader = styled(AnimateThreeDots)`
  color: #fff;
`;

export { DocumentFileIcon };
