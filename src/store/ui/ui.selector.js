// Modules
import { createSelector } from "reselect";

// Select Ui Reducer
export const selectUiReducer = (state) => state.ui;

// Select IsSideBarOpen State
export const selectIsSideBarOpen = createSelector(
  [selectUiReducer],
  (uiSlice) => uiSlice.isSideBarOpen
);

// Select IsLoading State
export const selectIsLoading = createSelector(
  [selectUiReducer],
  (uiSlice) => uiSlice.isLoading
);

// Select LoadingType State
export const selectLoadingType = createSelector(
  [selectUiReducer],
  (uiSlice) => uiSlice.loadingType
);

// Select ScrollWith State
export const selectScrollWith = createSelector(
  [selectUiReducer],
  (uiSlice) => uiSlice.scrollWith
);

// Select EditorFullScreen State
export const selectEditorFullScreen = createSelector(
  [selectUiReducer],
  (uiSlice) => uiSlice.editorFullScreen
);

// Select Error State
export const selectError = createSelector(
  [selectUiReducer],
  (uiSlice) => uiSlice.error
);
