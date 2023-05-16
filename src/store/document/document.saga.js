// Modules
import { put, call, all, takeLatest } from "redux-saga/effects";

// Action Types
import { DOCUMENT_ACTION_TYPES } from "./document.type";

// Actions
import { setDocuments } from "./document.action";
import { setIsLoading as uiIsLoading } from "../ui";

// Apis
import * as Apis from "../../apis";

export function* fetchDocuments() {
  const documents = yield call(Apis.fetchDocuments);
  yield put(setDocuments(documents));
}

export function* updateDocument({ payload: updatedDocumentData }) {
  const documents = yield call(Apis.updateDocument, updatedDocumentData);
  yield put(setDocuments(documents));
}

export function* syncDocuments({ payload: documents }) {
  yield put(uiIsLoading(true));
  const allDocuments = yield call(Apis.syncDocuments, documents);
  yield put(setDocuments(allDocuments));
  yield put(uiIsLoading(false));
}

export function* deleteDocument({ payload: documentId }) {
  const documents = yield call(Apis.deleteDocument, documentId);
  yield put(setDocuments(documents));
}

export function* onFetchDocuments() {
  yield takeLatest(
    DOCUMENT_ACTION_TYPES.START_FETCHING_DOCUMENTS,
    fetchDocuments
  );
}

export function* onSyncDocuments() {
  yield takeLatest(
    DOCUMENT_ACTION_TYPES.START_SYNCING_DOCUMENTS,
    syncDocuments
  );
}

export function* onUpdateDocuments() {
  yield takeLatest(
    DOCUMENT_ACTION_TYPES.START_UPDATING_DOCUMENT,
    updateDocument
  );
}

export function* onDeleteDocuments() {
  yield takeLatest(
    DOCUMENT_ACTION_TYPES.START_DELETING_DOCUMENT,
    deleteDocument
  );
}

export function* documentSaga() {
  yield all([
    call(onDeleteDocuments),
    call(onFetchDocuments),
    call(onUpdateDocuments),
    call(onSyncDocuments),
  ]);
}
