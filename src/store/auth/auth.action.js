// Action Types
import { AUTH_ACTION_TYPES } from "./auth.type";

// Utils
import { createAction } from "../../utils";

/**
 * Set CurrentUser State
 * @param {Object} user
 */
export const setCurrentUser = (user) =>
  createAction(AUTH_ACTION_TYPES.SET_CURRENT_USER, user);

/**
 * Set CheckedAuth State
 * @param {boolean} bool
 */
export const setCheckedAuth = (bool) =>
  createAction(AUTH_ACTION_TYPES.SET_CHECKED_AUTH, bool);

/**
 * Set IsLoading State
 * @param {boolean} bool
 */
export const setIsLoading = (bool) =>
  createAction(AUTH_ACTION_TYPES.SET_IS_LOADING, bool);

/**
 * Set Error State
 * @param {Object} error
 */
export const setError = (error) =>
  createAction(AUTH_ACTION_TYPES.SET_ERROR, error);

/**
 * Logout User
 */
export const logoutUser = () => createAction(AUTH_ACTION_TYPES.LOGOUT_USER);

/**
 * Start Initializing Auth
 */
export const onInitializeAuth = () =>
  createAction(AUTH_ACTION_TYPES.START_INITIALIZING_AUTH);

/**
 * Start OAuth
 * @param {string} provider
 */
export const startOAuth = (provider) =>
  createAction(AUTH_ACTION_TYPES.START_OAUTH, provider);
