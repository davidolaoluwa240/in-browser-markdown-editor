// Action Types
import { DOCUMENT_ACTION_TYPES } from "./document.type";

// Utils
import { createAction } from "../../utils";

// Set Documents Action
export const setDocuments = (documents) =>
  createAction(DOCUMENT_ACTION_TYPES.SET_DOCUMENTS, documents);

// Set IsLoading Action
export const setIsLoading = (bool) =>
  createAction(DOCUMENT_ACTION_TYPES.SET_IS_LOADING, bool);

// Start Fetching Documents Action
export const startFetchingDocuments = () =>
  createAction(DOCUMENT_ACTION_TYPES.START_FETCHING_DOCUMENTS);

// Start Updating Document Action
export const startUpdatingDocument = (newDocumentData) =>
  createAction(DOCUMENT_ACTION_TYPES.START_UPDATING_DOCUMENT, newDocumentData);

// Start Deleting Document Action
export const startDeletingDocument = (documentId) =>
  createAction(DOCUMENT_ACTION_TYPES.START_DELETING_DOCUMENT, documentId);
