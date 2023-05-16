// Action Types
import { UI_ACTION_TYPES } from "./ui.type";

// Initial State
const INITIAL_STATE = {
  isSideBarOpen: false,
  theme: "dark",
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
    default:
      return state;
  }
};
