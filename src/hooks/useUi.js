// Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import { uiSA } from "../store";

// Destructure Redux Imports
const {
  selectIsSideBarOpen,
  selectTheme,
  selectIsLoading,
  selectScrollWith,
  selectEditorFullScreen,
  selectLoadingType,
  selectError,
} = uiSA;

// Ui Hook
export const useUi = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const theme = useSelector(selectTheme);
  const isLoading = useSelector(selectIsLoading);
  const scrollWith = useSelector(selectScrollWith);
  const editorFullScreen = useSelector(selectEditorFullScreen);
  const loadingType = useSelector(selectLoadingType);
  const error = useSelector(selectError);

  return {
    dispatch,
    isSideBarOpen,
    theme,
    isLoading,
    scrollWith,
    editorFullScreen,
    loadingType,
    error,
    ...uiSA,
  };
};
