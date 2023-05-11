// Modules
import { call, put, all, takeLatest } from "redux-saga/effects";

// Action Types
import { AUTH_ACTION_TYPES } from "./auth.type";

// Actions
import { setCurrentUser } from "./auth.action";

// Apis
import * as Apis from "../../apis";

export function* onInitializeAuth() {
  const userProfile = yield call(Apis.initializeAuth);
  put(setCurrentUser(userProfile));
}

export function* onSignupWithOAuth(provider) {
  const userProfile = yield call(Apis.signupWithOAuth, provider);
  yield put(setCurrentUser(userProfile));
}

export function* startOAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_OAUTH, onSignupWithOAuth);
}

export function* startInitializeAuth() {
  yield takeLatest(AUTH_ACTION_TYPES.START_INITIALIZING_AUTH, onInitializeAuth);
}

export function* authSaga() {
  yield all([call(startInitializeAuth), call(startOAuth)]);
}
