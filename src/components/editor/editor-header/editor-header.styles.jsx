// Modules
import styled, { css } from "styled-components";

// Components
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "../../";

// Utils
import { getThemeColor } from "../../../utils";

export const EditorHeaderGroup = styled.div`
  background: ${getThemeColor("editorHeaderBg")};
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditorHeaderTitleGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const EditorHeaderTitle = styled.p`
  font-size: 1.3rem;
  margin-left: 2.1rem;
  font-family: "Commissioner", sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${getThemeColor("editorHeaderTitleColor")};
  margin-right: 0.7rem;
`;

export const editorIconStyle = css`
  color: ${getThemeColor("editorHeaderIconColor")};
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
