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

// Utils
import { catchAsyncGen as utilCatchAsyncGen } from "../../utils";

// Apis
import * as Apis from "../../apis";

// Configurations
const catchAsyncGen = utilCatchAsyncGen.bind(null, setError);

function* setUiSettings(uiSettings) {
  const { editorFullScreen, scrollWith } = uiSettings;
  yield put(setEditorFullScreen(editorFullScreen));
  yield put(setScrollWith(scrollWith));
}

const addDefaultUiSettings = catchAsyncGen(function* () {
  const uiSettings = yield call(Apis.addDefaultUiSettings);
  yield call(setUiSettings, uiSettings);
});

const fetchUiSettings = catchAsyncGen(function* () {
  yield put(setLoadingType("fetching"));
  const uiSettings = yield call(Apis.fetchUiSettings);
  if (uiSettings) {
    yield call(setUiSettings, uiSettings);
  } else {
    yield call(addDefaultUiSettings);
  }
});

const addAndUpdateUiSettings = catchAsyncGen(function* ({
  payload: { loadingType = "updating", ...newOrUpdatedUiSetting },
}) {
  yield put(setLoadingType(loadingType));
  const uiSettings = yield call(
    Apis.addAndUpdateUiSettings,
    newOrUpdatedUiSetting
  );
  yield call(setUiSettings, uiSettings);
});

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
