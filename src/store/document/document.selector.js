// Modules
import { createSelector } from "reselect";

// Select Document Reducer
const documentReducer = (state) => state.document;

// Select Documents
export const selectDocuments = createSelector(
  [documentReducer],
  (documentSlice) => documentSlice.documents
);

// Select Active Documents
export const selectActiveDocuments = createSelector(
  [selectDocuments],
  (documents) => documents.filter((doc) => doc.isActive)
);

// Select IsLoading
export const selectIsLoading = createSelector(
  [documentReducer],
  (documentSlice) => documentSlice.isLoading
);
