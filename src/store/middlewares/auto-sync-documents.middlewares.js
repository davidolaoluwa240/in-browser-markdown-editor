// Document Actions
import { startSyncingDocuments } from "../document";

/**
 * Auto Sync Documents To Cloud
 */
export const autoSyncDocumentsToCloud = (store) => (next) => (action) => {
  // If Action Does Not Have A Type, Then Go The Next Middleware
  if (!action?.type || action.type !== "persist/REHYDRATE") return next(action);

  // Dispatch New Action To Sync Documents To Cloud As Soon As Redux Persist Re-hydrate
  if (action.type === "persist/REHYDRATE") {
    next(action);
    const documents = store.getState().document.documents;
    documents.length && next(startSyncingDocuments(documents));
  }
};
