// Modules
import { call, all } from "redux-saga/effects";

// Sagas
import { authSaga } from "./auth/auth.saga";
import { documentSaga } from "./document/document.saga";
import { uiSaga } from "./ui/ui.saga";

export function* rootSaga() {
  yield all([call(authSaga), call(documentSaga), call(uiSaga)]);
}
