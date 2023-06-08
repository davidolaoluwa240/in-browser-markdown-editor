// Modules
import fileDownload from "js-file-download";

/**
 * Download Markdown File
 * @param {Object} document Markdown document
 */
export const downloadMarkdownFile = (document) => {
  if (!document) return;
  fileDownload(document.content, `${document.fileName}.md`);
};
