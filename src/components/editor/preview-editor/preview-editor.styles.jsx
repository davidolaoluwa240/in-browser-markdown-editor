// Modules
import styled from "styled-components";

// Utils
import { getThemeColor } from "../../../utils";

export const PreviewEditorPreview = styled.div.attrs({
  className: "markdown-body",
})`
  width: 100%;
  min-height: 100%;

  &.markdown-body {
    background: transparent;

    h1 {
      line-height: 42px;
      font-size: 3.2rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${getThemeColor("editorHeaderTitleColor")};
      font-family: Roboto Slab, serif;
      font-weight: 700;
    }

    h2 {
      font-weight: 300;
      font-size: 2.8rem;
      line-height: 36px;
    }

    h3 {
      font-size: 2.4rem;
      line-height: 31px;
    }

    h4 {
      font-size: 2rem;
      line-height: 26px;
    }

    h5 {
      font-size: 1.6rem;
      line-height: 21px;
    }

    h6 {
      font-size: 1.4rem;
      line-height: 18px;
      color: #e46643;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    blockquote,
    ol,
    pre,
    ul {
      margin-bottom: 2rem;
    }

    button,
    li,
    p,
    span {
      font-family: Roboto, sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 24px;
      color: ${getThemeColor("editorColor")};
    }

    p {
      margin-top: 0px;
      margin-bottom: 1.6rem;
    }

    ul,
    ol {
      margin-left: 2.5rem;
    }

    blockquote {
      border-left: solid 4px #e46643;
    }

    blockquote,
    pre {
      padding: 2.4rem;
      background: ${getThemeColor("editorBlockquoteColor")};
      border-radius: 4px;
    }

    blockquote a,
    blockquote p {
      font-weight: 700;
      font-family: Roboto Slab, serif;
      color: ${getThemeColor("editorHeaderTitleColor")};
    }

    pre code {
      color: ${getThemeColor("editorHeaderTitleColor")};
      font-family: Roboto Mono, monospace;
      font-size: 1.4rem;
    }

    @media screen and (max-width: 369px) {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      blockquote,
      ol,
      pre,
      ul {
        margin-bottom: 1.7rem;
      }

      h1 {
        font-size: 2.9rem;
        line-height: 59px;
      }

      h2 {
        font-size: 2.5rem;
        line-height: 33px;
      }

      h3 {
        font-size: 2.1rem;
        line-height: 38px;
      }

      h4 {
        font-size: 1.7rem;
        line-height: 23px;
      }

      h5 {
        font-size: 1.3rem;
        line-height: 28px;
      }

      h6 {
        font-size: 1.1rem;
        line-height: 15px;
      }

      button,
      li,
      p,
      span {
        font-size: 1.2rem;
        line-height: 21px;
      }

      p {
        margin-bottom: 1.3rem;
      }

      ul,
      ol {
        margin-left: 0.7rem;
      }

      blockquote,
      pre {
        padding: 2.1rem;
      }
    }
  }
`;
