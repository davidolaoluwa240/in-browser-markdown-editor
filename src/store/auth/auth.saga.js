// Modules
import { call, put, all, takeLatest } from "redux-saga/effects";

// Action Types
import { AUTH_ACTION_TYPES } from "./auth.type";

// Actions
import { setCurrentUser, setError, setLoadingType } from "./auth.action";

// Apis
import * as Apis from "../../apis";

export function* initializeAuth() {
  try {
    const userProfile = yield call(Apis.initializeAuth);
    yield put(setCurrentUser(userProfile));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* linkOAuthProvider(err) {
  try {
    const userProfile = yield call(Apis.linkOAuthProvider, err);
    yield put(setCurrentUser(userProfile));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* signupWithOAuth({ payload: provider }) {
  try {
    yield put(setLoadingType(provider));
    const userProfile = yield call(Apis.signupWithOAuth, provider);
    yield put(setCurrentUser(userProfile));
  } catch (err) {
    if (err.code === "auth/account-exists-with-different-credential")
      return yield call(linkOAuthProvider, err);
    yield put(setError(err));
  }
}

export function* logoutUser() {
  try {
    yield call(Apis.logoutUser);
    yield put(setCurrentUser(null));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* onStartOAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_OAUTH, signupWithOAuth);
}

export function* onStartInitializeAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_INITIALIZING_AUTH, initializeAuth);
}

export function* onLogoutUser() {
  yield takeLatest(AUTH_ACTION_TYPES.LOGOUT_USER, logoutUser);
}

export function* authSaga() {
  yield all([
    call(onStartInitializeAuth),
    call(onStartOAuth),
    call(onLogoutUser),
  ]);
}
