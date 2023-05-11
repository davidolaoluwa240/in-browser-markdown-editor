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
