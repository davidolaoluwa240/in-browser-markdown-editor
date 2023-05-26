// Modules
import { createSelector } from "reselect";

// Select Ui Reducer
export const selectUiReducer = (state) => state.ui;

// Select Theme State
export const selectTheme = createSelector(
  [selectUiReducer],
  (uiSlice) => uiSlice.theme
);

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
