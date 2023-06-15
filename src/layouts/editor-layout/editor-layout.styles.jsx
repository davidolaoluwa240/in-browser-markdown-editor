// Modules
import styled from "styled-components";

// Utils
import { getThemeColor } from "../../utils";

export const EditorLayoutWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  position: relative;

  @media screen and (max-width: 900px) {
    height: calc(100vh - 56px);
  }
`;

export const EditorPanel = styled.div`
  width: ${({ shrink }) => (shrink ? "0%" : "100%")};
  height: 100%;
  transition: width 0.5s linear;
  overflow: hidden;

  &.editor-panel--border-right {
    border-right: 1px solid ${getThemeColor("editorPanelBorderColor")};
  }
`;
