// Action Types
import { UI_ACTION_TYPES } from "./ui.type";

// Utils
import { createAction } from "../../utils";

/**
 * Set Side Bar Visibility
 * @param {boolean} visibility Sidebar visibility
 */
export const setSideBarVisibility = (bool) =>
  createAction(UI_ACTION_TYPES.SET_SIDE_BAR_VISIBILITY, bool);

/**
 * Set Page Theme
 * @param {string} theme Theme
 */
export const setTheme = (theme) =>
  createAction(UI_ACTION_TYPES.SET_THEME, theme);

/**
 * Set Page Loading
 * @param {boolean} bool
 */
export const setIsLoading = (bool) =>
  createAction(UI_ACTION_TYPES.SET_IS_LOADING, bool);

/**
 * Set Editor Full Screen Mode
 * @param {Object} fullScreen
 */
export const setEditorFullScreen = (fullScreen) =>
  createAction(UI_ACTION_TYPES.SET_EDITOR_FULLSCREEN, fullScreen);

/**
 * Set Editor Scroll With
 * @param {string} editorName
 */
export const setScrollWith = (editorName) =>
  createAction(UI_ACTION_TYPES.SET_SCROLL_WITH, editorName);
