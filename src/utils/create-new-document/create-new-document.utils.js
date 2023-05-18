// Modules
import { v4 as uuidv4 } from "uuid";

// Data
import { DEFAULT_DOCUMENT_ITEM } from "../../data";

/**
 * Create New Markdown Document
 */
export const createNewDocument = () => {
  // Create Document Data
  const newDocument = {
    ...DEFAULT_DOCUMENT_ITEM,
    id: uuidv4(),
    lastSavedLocal: Date.now(),
  };

  // Return Created Document
  return newDocument;
};
