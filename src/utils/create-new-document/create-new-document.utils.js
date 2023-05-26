// Data
import { DEFAULT_DOCUMENT_ITEM } from "../../data";

/**
 * Create New Markdown Document
 */
export const createNewDocument = () => {
  // Create Document Data
  const newDocument = {
    ...DEFAULT_DOCUMENT_ITEM,
  };

  // Return Created Document
  return newDocument;
};
