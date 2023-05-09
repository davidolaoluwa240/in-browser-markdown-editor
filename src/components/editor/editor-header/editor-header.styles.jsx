// Modules
import styled from "styled-components";

// Components
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export const EditorHeaderGroup = styled.div`
  background: #212529;
  width: 100%;
  height: 42px;
  display: flex;
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

export const EditorHeaderFullScreenIcon = styled(MdOutlineFullscreen)``;

export const EditorHeaderFullScreenExitIcon = styled(MdOutlineFullscreenExit)``;
