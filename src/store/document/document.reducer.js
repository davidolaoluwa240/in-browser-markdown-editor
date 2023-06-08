// Action Types
import { DOCUMENT_ACTION_TYPES } from "./document.type";

// Initial State
const INITIAL_STATE = {
  documents: [],
  isLoading: false,
  loadingType: "",
  error: null,
};

// Document Reducer
export const documentReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case DOCUMENT_ACTION_TYPES.SET_DOCUMENTS:
      return {
        ...state,
        documents: payload,
        isLoading: false,
        loadingType: "",
        error: null,
      };
    case DOCUMENT_ACTION_TYPES.SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case DOCUMENT_ACTION_TYPES.SET_LOADING_TYPE:
      return { ...state, loadingType: payload };
    case DOCUMENT_ACTION_TYPES.SET_ERROR:
      return { ...state, error: payload, isLoading: false, loadingType: "" };
    default:
      return type.includes("document/START")
        ? { ...state, isLoading: true }
        : state;
  }
};
