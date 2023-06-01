// Modules
import { put, call, all, takeLatest } from "redux-saga/effects";

// Action Types
import { UI_ACTION_TYPES } from "./ui.type";

// Actions
import {
  setEditorFullScreen,
  setLoadingType,
  setScrollWith,
  setTheme,
  setError,
} from "./ui.action";

// Apis
import * as Apis from "../../apis";

function* setUiSettings(uiSettings) {
  const { editorFullScreen, theme, scrollWith } = uiSettings;
  yield put(setEditorFullScreen(editorFullScreen));
  yield put(setTheme(theme));
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

function* addAndUpdateUiSettings({ payload: newOrUpdatedUiSetting }) {
  try {
    yield put(setLoadingType("adding/updating"));
    const uiSettings = yield call(
      Apis.addAndUpdateUiSettings,
      newOrUpdatedUiSetting
    );
    yield call(setUiSettings, uiSettings);
  } catch (err) {
    yield put(setError(err));
  }
}

function* onFetchUiSettings() {
  yield takeLatest(UI_ACTION_TYPES.START_FETCHING_UI_SETTINGS, fetchUiSettings);
}

function* onAddAndUpdateUiSettings() {
  yield takeLatest(
    UI_ACTION_TYPES.START_ADDING_AND_UPDATING_UI_SETTINGS,
    addAndUpdateUiSettings
  );
}

export function* uiSaga() {
  yield all([call(onFetchUiSettings), call(onAddAndUpdateUiSettings)]);
}
