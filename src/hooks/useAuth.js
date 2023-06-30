// Hooks
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { authSA } from "../store";

// Destructure Redux Imports
const {
  selectCurrentUser,
  selectCheckedAuth,
  selectIsLoading,
  selectError,
  selectLoadingType,
  logoutUser,
} = authSA;

// Auth Hook
export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);
  const checkedAuth = useSelector(selectCheckedAuth);
  const error = useSelector(selectError);
  const loadingType = useSelector(selectLoadingType);

  /**
   * Handle Logout User
   */
  const handleLogoutUser = useCallback(() => dispatch(logoutUser()), []);

  return {
    dispatch,
    isLoading,
    currentUser,
    checkedAuth,
    error,
    loadingType,
    handleLogoutUser,
    ...authSA,
  };
};
