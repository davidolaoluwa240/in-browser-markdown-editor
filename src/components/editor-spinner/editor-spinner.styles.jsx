// Modules
import styled from "styled-components";

export const EditorSpinnerWrapper = styled.div`
  background: rgba(21, 22, 25, 0.8);
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  height: calc(100% - 42px);
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditorSpinnerText = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin-top: 0.5rem;
  color: #f8f9fa;
`;
