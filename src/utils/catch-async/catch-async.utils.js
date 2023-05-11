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
      handleAsyncError(err);
    }
  };
