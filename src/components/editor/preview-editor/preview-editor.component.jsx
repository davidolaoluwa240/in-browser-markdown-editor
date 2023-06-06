// Modules
import React from "react";
import { marked } from "marked";
import * as DOMPurify from "dompurify";

// Hooks
import { useEffect, useState } from "react";
import { useDocument } from "../../../hooks";

// Style
import "github-markdown-css";
import { PreviewEditorPreview } from "./preview-editor.styles";

export const PreviewEditor = () => {
  const { document } = useDocument();
  const [compiledMarkdownContent, setCompiledMarkdownContent] = useState();

  useEffect(() => {
    setCompiledMarkdownContent(
      DOMPurify.sanitize(marked.parse(document?.content || ""))
    );
  }, [document]);

  return (
    <PreviewEditorPreview
      dangerouslySetInnerHTML={{ __html: compiledMarkdownContent }}
    />
  );
};
