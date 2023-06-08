// Action Types
import { UI_ACTION_TYPES } from "./ui.type";

// Initial State
const INITIAL_STATE = {
  isSideBarOpen: false,
  scrollWith: "markdown",
  editorFullScreen: {
    markdown: "off",
    preview: "off",
  },
  isLoading: false,
  loadingType: "",
  error: null,
};

// Ui Reducer
export const uiReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case UI_ACTION_TYPES.SET_SIDE_BAR_VISIBILITY:
      return { ...state, isSideBarOpen: payload };
    case UI_ACTION_TYPES.SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case UI_ACTION_TYPES.SET_EDITOR_FULLSCREEN:
      return {
        ...state,
        editorFullScreen: payload,
        loadingType: "",
        isLoading: false,
        error: null,
      };
    case UI_ACTION_TYPES.SET_SCROLL_WITH:
      return { ...state, scrollWith: payload };
    case UI_ACTION_TYPES.SET_LOADING_TYPE:
      return { ...state, loadingType: payload };
    case UI_ACTION_TYPES.SET_ERROR:
      return { ...state, error: payload, isLoading: false, loadingType: "" };
    default:
      return type.includes("ui/START") ? { ...state, isLoading: true } : state;
  }
};
