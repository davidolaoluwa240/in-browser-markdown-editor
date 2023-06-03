// Modules
import { put, call, all, takeLatest } from "redux-saga/effects";

// Action Types
import { DOCUMENT_ACTION_TYPES } from "./document.type";

// Actions
import { setDocuments, setLoadingType, setError } from "./document.action";

// Utils
import { catchAsyncGen as utilCatchAsyncGen } from "../../utils";

// Apis
import * as Apis from "../../apis";

// Configurations
const catchAsyncGen = utilCatchAsyncGen.bind(null, setError);

const addDefaultDocument = catchAsyncGen(function* () {
  yield put(setLoadingType("adding/default"));
  const documents = yield call(Apis.addDefaultDocument);
  yield put(setDocuments(documents));
});

const fetchDocuments = catchAsyncGen(function* () {
  yield put(setLoadingType("fetching"));
  const documents = yield call(Apis.fetchDocuments);
  if (documents.length) {
    yield put(setDocuments(documents));
  } else {
    yield call(addDefaultDocument);
  }
});

const addDocument = catchAsyncGen(function* ({ payload: newDocument }) {
  yield put(setLoadingType("adding"));
  const documents = yield call(Apis.addDocument, newDocument);
  yield put(setDocuments(documents));
});

const updateDocument = catchAsyncGen(function* ({
  payload: updatedDocumentData,
}) {
  yield put(setLoadingType("updating"));
  const documents = yield call(Apis.updateDocument, updatedDocumentData);
  yield put(setDocuments(documents));
});

const deleteDocument = catchAsyncGen(function* ({ payload: documentId }) {
  yield put(setLoadingType("deleting"));
  const documents = yield call(Apis.deleteDocument, documentId);
  yield put(setDocuments(documents));
});

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
