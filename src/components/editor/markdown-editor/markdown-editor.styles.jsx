// Modules
import styled from "styled-components";

// Utils
import { getThemeColor } from "../../../utils";

export const MarkdownEditorInput = styled.div`
  width: 100%;
  min-height: 100%;
  outline: none;
  caret-color: #e46643;
  color: ${getThemeColor("editorColor")};
  font-family: Roboto Mono, monospace;
  font-size: 1.4rem;
`;
