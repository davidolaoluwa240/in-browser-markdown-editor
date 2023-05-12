// Action Types
import { DOCUMENT_ACTION_TYPES } from "./document.type";

// Initial State
const INITIAL_STATE = {
  documents: [],
  isLoading: false,
};

// Document Reducer
export const documentReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case DOCUMENT_ACTION_TYPES.SET_DOCUMENTS:
      return { ...state, documents: payload, isLoading: false };
    case DOCUMENT_ACTION_TYPES.SET_IS_LOADING:
      return { ...state, isLoading: payload };
    default:
      return type.includes("document/START")
        ? { ...state, isLoading: true }
        : state;
  }
};
