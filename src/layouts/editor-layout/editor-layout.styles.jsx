// Modules
import styled from "styled-components";

// Styles
import { EditorHeaderGroup } from "../../components/editor/editor-header/editor-header.styles";

export const EditorLayoutWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
`;

export const EditorPanel = styled.div`
  width: 100%;
  height: 100%;
  transition: width 0.5s linear;
  overflow: hidden;
  ${({ shrink }) => shrink && "width: 0%"};

  &:first-child {
    ${EditorHeaderGroup} {
      border-right: 1px solid rgba(255, 255, 255, 0.6);
      ${({ shrink }) => shrink && "border: none"}
    }
  }
`;
