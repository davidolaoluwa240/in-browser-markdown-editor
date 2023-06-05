// Modules
import styled from "styled-components";

export const EditorLayoutWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  position: relative;
`;

export const EditorPanel = styled.div`
  width: ${({ shrink }) => (shrink ? "0%" : "100%")};
  height: 100%;
  transition: width 0.5s linear;
  overflow: hidden;

  &.editor-panel--border-right {
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;
