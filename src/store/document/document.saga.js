// Modules
import { put, call, all, takeLatest } from "redux-saga/effects";

// Action Types
import { DOCUMENT_ACTION_TYPES } from "./document.type";

// Actions
import { setDocuments, setLoadingType, setError } from "./document.action";

// Apis
import * as Apis from "../../apis";

export function* addDefaultDocument() {
  try {
    yield put(setLoadingType("adding/default"));
    const documents = yield call(Apis.addDefaultDocument);
    yield put(setDocuments(documents));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* fetchDocuments() {
  try {
    yield put(setLoadingType("fetching"));
    const documents = yield call(Apis.fetchDocuments);
    if (documents.length) {
      yield put(setDocuments(documents));
    } else {
      yield call(addDefaultDocument);
    }
  } catch (err) {
    yield put(setError(err));
  }
}

export function* addDocument({ payload: newDocument }) {
  try {
    yield put(setLoadingType("adding"));
    const documents = yield call(Apis.addDocument, newDocument);
    yield put(setDocuments(documents));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* updateDocument({ payload: updatedDocumentData }) {
  try {
    yield put(setLoadingType("updating"));
    const documents = yield call(Apis.updateDocument, updatedDocumentData);
    yield put(setDocuments(documents));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* deleteDocument({ payload: documentId }) {
  try {
    yield put(setLoadingType("deleting"));
    const documents = yield call(Apis.deleteDocument, documentId);
    yield put(setDocuments(documents));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* onFetchDocuments() {
  yield takeLatest(
    DOCUMENT_ACTION_TYPES.START_FETCHING_DOCUMENTS,
    fetchDocuments
  );
}

export function* onAddDocument() {
  yield takeLatest(DOCUMENT_ACTION_TYPES.START_ADDING_DOCUMENT, addDocument);
}

export function* onUpdateDocument() {
  yield takeLatest(
    DOCUMENT_ACTION_TYPES.START_UPDATING_DOCUMENT,
    updateDocument
  );
}

export function* onDeleteDocument() {
  yield takeLatest(
    DOCUMENT_ACTION_TYPES.START_DELETING_DOCUMENT,
    deleteDocument
  );
}

export function* documentSaga() {
  yield all([
    call(onDeleteDocument),
    call(onFetchDocuments),
    call(onUpdateDocument),
    call(onAddDocument),
  ]);
}
