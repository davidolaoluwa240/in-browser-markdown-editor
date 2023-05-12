// Modules
import { createSelector } from "reselect";

// Select Document Reducer
const documentReducer = (state) => state.document;

// Select Documents
export const selectDocuments = createSelector(
  [documentReducer],
  (documentSlice) => documentSlice.documents
);

// Select IsLoading
export const selectIsLoading = createSelector(
  [documentReducer],
  (documentSlice) => documentSlice.isLoading
);
