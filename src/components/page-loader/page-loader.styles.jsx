// Modules
import styled from "styled-components";

// Components
import { GoMarkdown } from "react-icons/go";

export const PageLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #151619;
  height: 100vh;
`;

export const PageLoaderIcon = styled(GoMarkdown)`
  @keyframes scaleAndShrink {
    from {
      transform: scale(1.2);
    }

    to {
      transform: scale(1);
    }
  }

  vertical-align: middle;
  font-size: 4.5rem;
  fill: #fff;
  animation-name: scaleAndShrink;
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
