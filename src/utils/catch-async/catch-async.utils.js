// Modules
import { put, call } from "redux-saga/effects";

// Utils
import { handleAsyncError } from "../";

/**
 * Catch/Handle Asynchronous Error
 * @param {Function} callback Async callback function
 */
export const catchAsync =
  (callback) =>
  async (...data) => {
    try {
      // Trigger Async Callback
      const response = await callback(...data);

      // Return Response
      return response;
    } catch (err) {
      // TODO: remove below console.log later
      console.log(err);

      // Handle Asynchronous Error
      await handleAsyncError(err);
    }
  };

/**
 * Catch/Handle Asynchronous Error For Generator Functions
 * @param {Function} error Error redux action
 * @param {Function} genCallback Generator function callback
 */
export const catchAsyncGen = (setError, genCallback) => {
  return function* (action) {
    try {
      return yield call(genCallback, action);
    } catch (err) {
      yield put(setError(err));
    }
  };
};
