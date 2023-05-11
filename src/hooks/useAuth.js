// Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import { authSA } from "../store";

// Descructure Redux Imports
const { selectCurrentUser, selectCheckedAuth, selectIsLoading } = authSA;

// Auth Hook
export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);
  const checkedAuth = useSelector(selectCheckedAuth);

  return {
    dispatch,
    isLoading,
    currentUser,
    checkedAuth,
    ...authSA,
  };
};
