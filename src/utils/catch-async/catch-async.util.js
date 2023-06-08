// Modules
import { put, call } from "redux-saga/effects";

// Utils
import { handleAsyncError } from "..";

/**
 * Catch/Handle Asynchronous Error
 * @param {Function} callback Async callback function
 */
export const catchAsync =
  (callback) =>
  async (...data) => {
    try {
      return await callback(...data);
    } catch (err) {
      // TODO: remove below console.log/table later
      console.log(err);
      console.table(err);

      // Handle Asynchronous Error
      await handleAsyncError(err);
    }
  };

/**
 * Catch/Handle Asynchronous Error For Generator Functions
 * @param {Function} error Error redux action
 * @param {Function} genCallback Generator function callback
 * @param {Function} errHandler Generator function Error handler
 */
export const catchAsyncGen = (setError, genCallback, errHandler) => {
  return function* (action) {
    try {
      return yield call(genCallback, action);
    } catch (err) {
      yield put(
        setError(errHandler ? yield call(errHandler, err) || null : err)
      );
    }
  };
};
