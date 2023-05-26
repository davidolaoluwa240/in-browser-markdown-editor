// Modules
import { createSelector } from "reselect";

// Select Document Reducer
const selectDocumentReducer = (state) => state.document;

// Select Documents
export const selectDocuments = createSelector(
  [selectDocumentReducer],
  (documentSlice) => documentSlice.documents
);

// Select Active Documents
export const selectActiveDocuments = createSelector(
  [selectDocuments],
  (documents) => documents.filter((doc) => doc.isActive)
);

// Select IsLoading
export const selectIsLoading = createSelector(
  [selectDocumentReducer],
  (documentSlice) => documentSlice.isLoading
);

// Select LoadingType
export const selectLoadingType = createSelector(
  [selectDocumentReducer],
  (documentSlice) => documentSlice.LoadingType
);
