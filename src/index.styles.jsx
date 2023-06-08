// Modules
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;

    @media screen and (max-width: 900px) {
      font-size: 50%;
    }
  }

  body {
    font-size: 1.6rem;
    line-height: 24px;
    box-sizing: border-box;
    font-weight: 400;
    overflow-x: hidden;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }


  ::selection {
    background: #e46643;
    color: #212529;
  }
`;
