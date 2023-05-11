// Modules
import { createSelector } from "reselect";

// Select Auth Reducer
export const selectAuthReducer = (state) => state.auth;

// Select CurrentUser
export const selectCurrentUser = createSelector(
  [selectAuthReducer],
  (authSlice) => authSlice.currentUser
);

// Select IsLoading
export const selectIsLoading = createSelector(
  [selectAuthReducer],
  (authSlice) => authSlice.isLoading
);

// Select CheckedAuth
export const selectCheckedAuth = createSelector(
  [selectAuthReducer],
  (authSlice) => authSlice.checkedAuth
);
