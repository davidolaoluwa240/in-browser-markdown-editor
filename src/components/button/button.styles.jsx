// Modules
import styled, { css } from "styled-components";

export const ButtonBase = styled.button`
  text-decoration: none;
  padding: 1rem 1.6rem;
  border-radius: 4px;
  display: inline-block;
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  line-height: inherit;
  border: none;
  transition: background 0.3s ease-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: "${({ successText }) => `${successText}`}";
    width: 73%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    position: absolute;
    background: #e46643;
    top: -100%;
    right: 0;
    transition: top 0.3s ease-out;

    ${({ showSuccessText }) => showSuccessText && "top: 0;"}
  }

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
