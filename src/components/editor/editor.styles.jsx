// Modules
import styled from "styled-components";

export const EditorContent = styled.div`
  background: #151619;
  height: calc(100% - 42px);
  padding: 2rem 2.5rem;
  padding-bottom: 4rem;
  overflow-y: auto;
  ${({ show }) => !show && "display: none"};
  ${({ direction }) => direction && `direction: ${direction}`};

  &::-webkit-scrollbar {
    width: 6px;
    background: #38393d;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb6b6;
    border-radius: 10px;
  }
`;
