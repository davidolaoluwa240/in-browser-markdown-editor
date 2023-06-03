// Action Types
import { DOCUMENT_ACTION_TYPES } from "./document.type";

// Utils
import { createAction } from "../../utils";

/**
 * Set Documents State
 * @param {Array} documents
 */
export const setDocuments = (documents) =>
  createAction(DOCUMENT_ACTION_TYPES.SET_DOCUMENTS, documents);

/**
 * Set IsLoading State
 * @param {boolean} bool
 */
export const setIsLoading = (bool) =>
  createAction(DOCUMENT_ACTION_TYPES.SET_IS_LOADING, bool);

/**
 * Set Error State
 * @param {Object} error
 */
export const setError = (error) =>
  createAction(DOCUMENT_ACTION_TYPES.SET_ERROR, error);

/**
 * Set LoadingType State
 * @param {string} type
 */
export const setLoadingType = (type) =>
  createAction(DOCUMENT_ACTION_TYPES.SET_LOADING_TYPE, type);

/**
 * Start Fetching Documents
 */
export const startFetchingDocuments = () =>
  createAction(DOCUMENT_ACTION_TYPES.START_FETCHING_DOCUMENTS);

/**
 * Start Updating Document
 * @param {Object} updatedDocument
 */
export const startUpdatingDocument = (updatedDocument) =>
  createAction(DOCUMENT_ACTION_TYPES.START_UPDATING_DOCUMENT, updatedDocument);

/**
 * Start Adding Document
 * @param {Object} newDocument
 */
export const startAddingDocument = (newDocument) =>
  createAction(DOCUMENT_ACTION_TYPES.START_ADDING_DOCUMENT, newDocument);

/**
 * Start Deleting Document
 * @param {string} documentId
 */
export const startDeletingDocument = (documentId) =>
  createAction(DOCUMENT_ACTION_TYPES.START_DELETING_DOCUMENT, documentId);
