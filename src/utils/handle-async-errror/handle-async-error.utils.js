// Modules
import { toast } from "react-toastify";
import isOnline from "is-online";

// Firebase
import { FirebaseError } from "firebase/app";

// Async Error Map
export const ASYNC_ERROR_MAP = {
  network: "Internet Connectivity Error. Connect To Internet And Try Again",
  unknown: "An Unknown Error Occur",
  unhandled:
    process.env.NODE_ENV === "development"
      ? "Unhandled Error Occur"
      : undefined,
  "auth/account-exists-with-different-credential": 0,
};

/**
 * Run Network Test
 * @return {boolean} True if network test pass, else false
 */
const passNetworkTest = async () => {
  return await isOnline();
};

/**
 * Handle Asynchronous Error
 * @param {Error|FirebaseError} error Error
 */
export const handleAsyncError = async (error) => {
  // 1). Check If It Is Network Error, By Running Network Test
  const isNetworkError = !(await passNetworkTest());

  // 2). Throw Custom Error If It Is Network Error
  if (isNetworkError) {
    return toast.error(ASYNC_ERROR_MAP.network);
  }

  // 3). Throw Custom Error Message Based On Error Object.
  const errorCode = error.code || "unknown";
  const errorMessage =
    ASYNC_ERROR_MAP[errorCode] ?? ASYNC_ERROR_MAP["unhandled"];
  toast.error(errorMessage !== 0 ? errorMessage : undefined);

  // 4). After Handling Error, Also Make Error Available In Components
  throw error;
};
