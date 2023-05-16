// Document Actions
import { startSyncingDocuments } from "../document";

// Auth Action Types
import { AUTH_ACTION_TYPES } from "../auth/auth.type";
/**
 * Auto Sync Documents To Cloud
 */
export const autoSyncDocumentsToCloud =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    // Dispatch New Action To Sync Documents To Cloud As Soon As Auth Is Checked
    if (action.type === AUTH_ACTION_TYPES.SET_CHECKED_AUTH) {
      next(action);
      const { documents } = getState().document;
      const { currentUser } = getState().auth;
      return currentUser && dispatch(startSyncingDocuments(documents));
    }

    return next(action);
  };
