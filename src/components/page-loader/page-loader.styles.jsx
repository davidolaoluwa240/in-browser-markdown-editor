// Modules
import styled, { keyframes } from "styled-components";

// Components
import { GoMarkdown } from "react-icons/go";

// Animations
const scaleAndShrink = keyframes`
  from {
      transform: scale(1.2);
    }

    to {
      transform: scale(1);
    }
`;

export const PageLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #151619;
  height: 100vh;
`;

export const PageLoaderIcon = styled(GoMarkdown)`
  vertical-align: middle;
  font-size: 4.5rem;
  fill: #fff;
  animation: ${scaleAndShrink} 1.2s linear infinite;
`;
