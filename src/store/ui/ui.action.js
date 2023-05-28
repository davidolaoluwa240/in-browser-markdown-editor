// Action Types
import { UI_ACTION_TYPES } from "./ui.type";

// Utils
import { createAction } from "../../utils";

/**
 * Set Side Bar Visibility State
 * @param {boolean} visibility Sidebar visibility
 */
export const setSideBarVisibility = (bool) =>
  createAction(UI_ACTION_TYPES.SET_SIDE_BAR_VISIBILITY, bool);

/**
 * Set Page Theme State
 * @param {string} theme Theme
 */
export const setTheme = (theme) =>
  createAction(UI_ACTION_TYPES.SET_THEME, theme);

/**
 * Set IsLoading State
 * @param {boolean} bool
 */
export const setIsLoading = (bool) =>
  createAction(UI_ACTION_TYPES.SET_IS_LOADING, bool);

/**
 * Set loadingType State
 * @param {string} type
 */
export const setLoadingType = (type) =>
  createAction(UI_ACTION_TYPES.SET_LOADING_TYPE, type);

/**
 * Set Editor FullScreen Mode State
 * @param {Object} fullScreen
 */
export const setEditorFullScreen = (fullScreen) =>
  createAction(UI_ACTION_TYPES.SET_EDITOR_FULLSCREEN, fullScreen);

/**
 * Set Editor ScrollWith State
 * @param {string} editorName
 */
export const setScrollWith = (editorName) =>
  createAction(UI_ACTION_TYPES.SET_SCROLL_WITH, editorName);

/**
 * Set Error State
 * @param {Object} error
 */
export const setError = (error) =>
  createAction(UI_ACTION_TYPES.SET_ERROR, error);

/**
 * Start Fetching Ui Settings
 */
export const startFetchingUiSettings = () =>
  createAction(UI_ACTION_TYPES.START_FETCHING_UI_SETTINGS);

/**
 * Start Adding And Updating Ui Settings
 * @param {Object} uiSettings
 */
export const startAddingAndUpdatingUiSettings = (uiSettings) =>
  createAction(
    UI_ACTION_TYPES.START_ADDING_AND_UPDATING_UI_SETTINGS,
    uiSettings
  );
