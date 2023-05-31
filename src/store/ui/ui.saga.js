// Modules
import { put, call, all, takeLatest } from "redux-saga/effects";

// Action Types
import { UI_ACTION_TYPES } from "./ui.type";

// Actions
import {
  setEditorFullScreen,
  setScrollWith,
  setLoadingType,
  setError,
} from "./ui.action";

// Apis
import * as Apis from "../../apis";

function* setUiSettings(uiSettings) {
  const { editorFullScreen, scrollWith } = uiSettings;
  yield put(setEditorFullScreen(editorFullScreen));
  yield put(setScrollWith(scrollWith));
}

function* addDefaultUiSettings() {
  try {
    const uiSettings = yield call(Apis.addDefaultUiSettings);
    yield call(setUiSettings, uiSettings);
  } catch (err) {
    yield put(setError(err));
  }
}

function* fetchUiSettings() {
  try {
    yield put(setLoadingType("fetching"));
    const uiSettings = yield call(Apis.fetchUiSettings);
    if (uiSettings) {
      yield call(setUiSettings, uiSettings);
    } else {
      yield call(addDefaultUiSettings);
    }
  } catch (err) {
    yield put(setError(err));
  }
}

function* addUiSettings({ payload: newUiSettings }) {
  try {
    yield put(setLoadingType("adding"));
    const uiSettings = yield call(Apis.addUiSettings, newUiSettings);
    yield call(setUiSettings, uiSettings);
  } catch (err) {
    yield put(setError(err));
  }
}

function* updateUiSettings({ payload: updatedUiSettings }) {
  try {
    yield put(setLoadingType("updating"));
    const uiSettings = yield call(Apis.updateUiSettings, updatedUiSettings);
    yield call(setUiSettings, uiSettings);
  } catch (err) {
    yield put(setError(err));
  }
}

function* onFetchUiSettings() {
  yield takeLatest(UI_ACTION_TYPES.START_FETCHING_UI_SETTINGS, fetchUiSettings);
}

function* onAddUiSettings() {
  yield takeLatest(UI_ACTION_TYPES.START_ADDING_UI_SETTINGS, addUiSettings);
}

function* onUpdateUiSettings() {
  yield takeLatest(
    UI_ACTION_TYPES.START_UPDATING_UI_SETTINGS,
    updateUiSettings
  );
}

export function* uiSaga() {
  yield all([
    call(onFetchUiSettings),
    call(onAddUiSettings),
    call(onUpdateUiSettings),
  ]);
}