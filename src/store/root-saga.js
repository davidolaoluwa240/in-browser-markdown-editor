// Modules
import { call, all } from "redux-saga/effects";

// Sagas
import { authSaga } from "./auth/auth.saga";

export function* rootSaga() {
  yield all([call(authSaga)]);
}
