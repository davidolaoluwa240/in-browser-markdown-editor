// Modules
import styled, { css } from "styled-components";

// Components
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export const EditorHeaderGroup = styled.div`
  background: #212529;
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditorHeaderTitle = styled.p`
  font-size: 1.3rem;
  margin-left: 2.1rem;
  font-family: "Commissioner", sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #f8f9fa;
`;

export const editorIconStyle = css`
  color: rgb(124, 129, 135);
  font-size: 2.5rem;
  cursor: pointer;
  margin-right: 1.8rem;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scaleX(1.2);
  }
`;

export const EditorHeaderFullScreenIcon = styled(MdOutlineFullscreen)`
  ${editorIconStyle};
  display: ${({ isFullScreen }) => (isFullScreen ? "none" : "block")};
`;

export const EditorHeaderFullScreenExitIcon = styled(MdOutlineFullscreenExit)`
  ${editorIconStyle};
  display: ${({ isFullScreen }) => (!isFullScreen ? "none" : "block")};
`;
