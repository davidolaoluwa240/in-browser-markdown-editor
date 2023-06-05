// Modules
import { createSelector } from "reselect";

// Select Document Reducer
const selectDocumentReducer = (state) => state.document;

// Select Documents State
export const selectDocuments = createSelector(
  [selectDocumentReducer],
  (documentSlice) => documentSlice.documents
);

// Select IsLoading State
export const selectIsLoading = createSelector(
  [selectDocumentReducer],
  (documentSlice) => documentSlice.isLoading
);

// Select LoadingType State
export const selectLoadingType = createSelector(
  [selectDocumentReducer],
  (documentSlice) => documentSlice.loadingType
);

// Select Error State
export const selectError = createSelector(
  [selectDocumentReducer],
  (documentSlice) => documentSlice.error
);
