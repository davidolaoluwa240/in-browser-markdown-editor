// Modules
import styled from "styled-components";

export const EditorContent = styled.div`
  height: calc(100% - 42px);
  padding: 2rem 2.5rem;
  padding-bottom: 4rem;
  overflow-y: auto;

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
