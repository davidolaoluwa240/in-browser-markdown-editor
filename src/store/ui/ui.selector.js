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
