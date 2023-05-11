// Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import { uiSA } from "../store";

// Destructure Redux Imports
const { selectIsSideBarOpen, selectTheme } = uiSA;

// Ui Hook
export const useUi = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const theme = useSelector(selectTheme);

  return {
    dispatch,
    isSideBarOpen,
    theme,
    ...uiSA,
  };
};
