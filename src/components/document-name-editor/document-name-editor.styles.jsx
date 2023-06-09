// Modules
import styled from "styled-components";

// Components
import ContentEditable from "react-contenteditable";
import { AnimateThreeDots } from "../";

// Styles
import { DocumentFileIcon } from "../document-file-base/document-file-item/document-file-item.styles";
import { NotSavedFlagBox } from "../not-saved-flag/not-saved-flag.styles";

export const DocumentNameEditorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.4rem;

  ${DocumentFileIcon} {
    margin-right: 1.6rem;
    color: white;

    @media screen and (max-width: 900px) {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    width: 190px;
  }
`;

export const DocumentNameEditorInputGroup = styled.div`
  color: #ffffff;
`;

export const DocumentNameEditorLabel = styled.label`
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 15px;
  font-family: "Roboto", sans-serif;
  color: #adb5bd;
  display: flex;
  align-items: center;

  ${NotSavedFlagBox} {
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DocumentNameExtension = styled.span`
  line-height: 18px;
`;

export const DocumentNameEditorInput = styled(ContentEditable)`
  border: none;
  outline: none;
  caret-color: #e46643;
`;

export const DocumentNameEditorInputValueSpinner = styled(AnimateThreeDots)`
  color: #fff;
`;

export { DocumentFileIcon };
