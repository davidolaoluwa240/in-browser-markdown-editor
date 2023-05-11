// Modules
import styled, { css } from "styled-components";

export const ButtonBase = styled.button`
  text-decoration: none;
  padding: 1rem 1.6rem;
  border-radius: 4px;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  line-height: inherit;
  border: none;
  transition: background 0.3s ease-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ widthFull }) => widthFull && "width: 100%"};

  ${({ color }) => {
    switch (color) {
      default:
        return css`
          background: #e46643;
          color: #fff;

          &:hover {
            background: #f39765;
          }
        `;
    }
  }}
`;
