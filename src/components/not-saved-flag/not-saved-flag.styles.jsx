// Modules
import styled from "styled-components";

export const NotSavedFlagBox = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: linear-gradient(
    198deg,
    rgba(152, 95, 153, 1) 0%,
    rgba(228, 102, 67, 1) 80%
  );
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
