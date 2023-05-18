// Modules
import styled from "styled-components";

export const ButtonBase = styled.button`
  text-decoration: none;
  padding: 1rem 1.6rem;
  border-radius: 4px;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  line-height: inherit;
  border: none;
  background: #e46643;
  color: #fff;
  transition: background 0.3s ease-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #f39765;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ color }) => {
    switch (color) {
      case "secondary":
        return "background: #f8e5ee";
    }
  }};

  ${({ widthFull }) => widthFull && "width: 100%"};
`;

export const buttonSpinnerStyle = {
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  background: "#e46643",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
};
