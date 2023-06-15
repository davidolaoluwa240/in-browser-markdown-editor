// Modules
import React from "react";
import { marked } from "marked";
import * as DOMPurify from "dompurify";

// Hooks
import { useEffect, useState, useContext } from "react";
import { useDocument } from "../../../hooks";

// Contexts
import { ThemeContext } from "styled-components";

// Style
import "github-markdown-css/github-markdown-light.css";
import { PreviewEditorPreview } from "./preview-editor.styles";

export const PreviewEditor = () => {
  const { document: activeDocument } = useDocument();
  const [compiledMarkdownContent, setCompiledMarkdownContent] = useState();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setCompiledMarkdownContent(
      DOMPurify.sanitize(marked.parse(activeDocument?.content || ""))
    );
  }, [activeDocument]);

  useEffect(() => {
    const githubMarkdownCssThemeLink = `<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-${theme}.min.css"
      integrity="${
        theme === "light"
          ? "sha512-n5zPz6LZB0QV1eraRj4OOxRbsV7a12eAGfFcrJ4bBFxxAwwYDp542z5M0w24tKPEhKk2QzjjIpR5hpOjJtGGoA=="
          : "sha512-Mo2QuokS9Y0JOuzVLUh3o9A07RqSXcpc2KC9LXxOwfaBgPt8ZHRiDfGQ2+tZw7xIno+ViWipTNLg1StC6TmwMA=="
      }"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />`;
    const githubMarkdownCssThemeLinkEl = new DOMParser()
      .parseFromString(githubMarkdownCssThemeLink, "text/html")
      .head.querySelector("link");

    document.head.insertAdjacentElement(
      "beforeend",
      githubMarkdownCssThemeLinkEl
    );

    return () => githubMarkdownCssThemeLinkEl.remove();
  }, [theme]);

  return (
    <PreviewEditorPreview
      dangerouslySetInnerHTML={{ __html: compiledMarkdownContent }}
    />
  );
};
