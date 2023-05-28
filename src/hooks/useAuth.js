// Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import { authSA } from "../store";

// Descructure Redux Imports
const { selectCurrentUser, selectCheckedAuth, selectIsLoading, selectError } =
  authSA;

// Auth Hook
export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);
  const checkedAuth = useSelector(selectCheckedAuth);
  const error = useSelector(selectError);

  return {
    dispatch,
    isLoading,
    currentUser,
    checkedAuth,
    error,
    ...authSA,
  };
};
