// Modules
import { createSelector } from "reselect";

// Select Auth Reducer
export const selectAuthReducer = (state) => state.auth;

// Select CurrentUser State
export const selectCurrentUser = createSelector(
  [selectAuthReducer],
  (authSlice) => authSlice.currentUser
);

// Select IsLoading State
export const selectIsLoading = createSelector(
  [selectAuthReducer],
  (authSlice) => authSlice.isLoading
);

// Select CheckedAuth State
export const selectCheckedAuth = createSelector(
  [selectAuthReducer],
  (authSlice) => authSlice.checkedAuth
);

// Select Error State
export const selectError = createSelector(
  [selectAuthReducer],
  (authSlice) => authSlice.error
);
