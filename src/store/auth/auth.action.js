// Action Types
import { AUTH_ACTION_TYPES } from "./auth.type";

// Utils
import { createAction } from "../../utils";

// Start Initializing Auth
export const onInitializeAuth = () =>
  createAction(AUTH_ACTION_TYPES.START_INITIALIZING_AUTH);

// Start OAuth
export const startOAuth = (provider) =>
  createAction(AUTH_ACTION_TYPES.START_OAUTH, provider);

// Set Current User
export const setCurrentUser = (user) =>
  createAction(AUTH_ACTION_TYPES.SET_CURRENT_USER, user);

// Set Checked Auth
export const setCheckedAuth = (bool) =>
  createAction(AUTH_ACTION_TYPES.SET_CHECKED_AUTH, bool);

// Set Is Loading
export const setIsLoading = (bool) =>
  createAction(AUTH_ACTION_TYPES.SET_IS_LOADING, bool);

// Logout User
export const logoutUser = () => createAction(AUTH_ACTION_TYPES.LOGOUT_USER);
