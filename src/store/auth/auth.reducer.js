// Action Types
import { AUTH_ACTION_TYPES } from "./auth.type";

// Auth Initial State
const INITIAL_STATE = {
  currentUser: null,
  checkedAuth: false,
  isLoading: false,
};

// Auth Reducer
export const authReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case AUTH_ACTION_TYPES.SET_CHECKED_AUTH:
      return { ...state, checkedAuth: payload };
    case AUTH_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    default:
      return type.includes("auth/START")
        ? { ...state, isLoading: true }
        : state;
  }
};
