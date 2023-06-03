// Modules
import { call, put, all, takeLatest } from "redux-saga/effects";

// Action Types
import { AUTH_ACTION_TYPES } from "./auth.type";

// Actions
import { setCurrentUser, setError, setLoadingType } from "./auth.action";

// Utils
import { catchAsyncGen as utilCatchAsyncGen } from "../../utils";

// Apis
import * as Apis from "../../apis";

// Configurations
const catchAsyncGen = utilCatchAsyncGen.bind(null, setError);

const initializeAuth = catchAsyncGen(function* () {
  const userProfile = yield call(Apis.initializeAuth);
  yield put(setCurrentUser(userProfile));
});

const linkOAuthProvider = catchAsyncGen(function* (err) {
  const userProfile = yield call(Apis.linkOAuthProvider, err);
  yield put(setCurrentUser(userProfile));
});

const signupWithOAuth = catchAsyncGen(
  function* ({ payload: provider }) {
    yield put(setLoadingType(provider));
    const userProfile = yield call(Apis.signupWithOAuth, provider);
    yield put(setCurrentUser(userProfile));
  },
  function* (err) {
    if (err.code === "auth/account-exists-with-different-credential") {
      yield call(linkOAuthProvider, err);
    }
  }
);

const logoutUser = catchAsyncGen(function* () {
  yield call(Apis.logoutUser);
  yield put(setCurrentUser(null));
});

function* onStartOAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_OAUTH, signupWithOAuth);
}

function* onStartInitializeAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_INITIALIZING_AUTH, initializeAuth);
}

function* onLogoutUser() {
  yield takeLatest(AUTH_ACTION_TYPES.LOGOUT_USER, logoutUser);
}

export function* authSaga() {
  yield all([
    call(onStartInitializeAuth),
    call(onStartOAuth),
    call(onLogoutUser),
  ]);
}
