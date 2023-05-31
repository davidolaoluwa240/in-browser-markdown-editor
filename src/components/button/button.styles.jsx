// Modules
import styled, { css } from "styled-components";

// Components
import { AnimateThreeDots } from "../";

const colorStyle =
  (hovered = true) =>
  ({ secondary, tertiary }) => {
    if (secondary) {
      return css`
        background: linear-gradient(
          198deg,
          rgba(152, 95, 153, 1) 0%,
          rgba(228, 102, 67, 1) 80%
        );

        &:hover,
        &:disabled {
          ${hovered &&
          css`
            background: linear-gradient(
              198deg,
              rgba(152, 95, 153, 0.8) 0%,
              rgba(228, 102, 67, 0.8) 80%
            );
          `}
        }
      `;
    }

    if (tertiary) {
      return css`
        background: linear-gradient(
          198deg,
          rgba(6, 123, 194, 1) 0%,
          rgba(228, 102, 67, 1) 83%
        );

        &:hover,
        &:disabled {
          ${hovered &&
          css`
            background: linear-gradient(
              198deg,
              rgba(6, 123, 194, 0.8) 0%,
              rgba(228, 102, 67, 0.8) 83%
            );
          `}
        }
      `;
    }

    return css`
      background: #e46643;

      &:hover,
      &:disabled {
        ${hovered &&
        css`
          background: #f39765;
        `}
      }
    `;
  };

export const StyledThreeDots = styled(AnimateThreeDots)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ButtonBase = styled.button`
  text-decoration: none;
  padding: 1rem 1.6rem;
  border-radius: 4px;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: inherit;
  line-height: inherit;
  border: none;
  transition: background 0.3s ease-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  width: ${({ widthFull }) => (widthFull ? "100%" : "auto")};
  ${colorStyle()};

  &:hover,
  &:disabled {
    color: rgba(255, 255, 255, 0.8);
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${StyledThreeDots} {
    ${colorStyle(false)}
  }
`;
