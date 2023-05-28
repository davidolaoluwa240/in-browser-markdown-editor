// Modules
import { call, put, all, takeLatest } from "redux-saga/effects";

// Action Types
import { AUTH_ACTION_TYPES } from "./auth.type";

// Actions
import { setCurrentUser, setError } from "./auth.action";

// Apis
import * as Apis from "../../apis";

export function* onInitializeAuth() {
  try {
    const userProfile = yield call(Apis.initializeAuth);
    yield put(setCurrentUser(userProfile));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* onSignupWithOAuth({ payload: provider }) {
  try {
    const userProfile = yield call(Apis.signupWithOAuth, provider);
    yield put(setCurrentUser(userProfile));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* onLogoutUser() {
  try {
    yield call(Apis.logoutUser);
    yield put(setCurrentUser(null));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* startOAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_OAUTH, onSignupWithOAuth);
}

export function* startInitializeAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_INITIALIZING_AUTH, onInitializeAuth);
}

export function* logoutUser() {
  yield takeLatest(AUTH_ACTION_TYPES.LOGOUT_USER, onLogoutUser);
}

export function* authSaga() {
  yield all([call(startInitializeAuth), call(startOAuth), call(logoutUser)]);
}
