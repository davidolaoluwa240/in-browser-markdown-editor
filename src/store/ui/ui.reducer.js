// Action Types
import { UI_ACTION_TYPES } from "./ui.type";

// Initial State
const INITIAL_STATE = {
  isSideBarOpen: false,
  theme: "dark",
  scrollWith: "markdown",
  editorFullScreen: {
    markdown: "off",
    preview: "off",
  },
  isLoading: false,
};

// Ui Reducer
export const uiReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case UI_ACTION_TYPES.SET_SIDE_BAR_VISIBILITY:
      return { ...state, isSideBarOpen: payload };
    case UI_ACTION_TYPES.SET_THEME:
      return { ...state, theme: payload };
    case UI_ACTION_TYPES.SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case UI_ACTION_TYPES.SET_EDITOR_FULLSCREEN:
      return { ...state, editorFullScreen: payload };
    case UI_ACTION_TYPES.SET_SCROLL_WITH:
      return { ...state, scrollWith: payload };
    default:
      return state;
  }
};
