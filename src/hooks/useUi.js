// Hooks
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { uiSA } from "../store";

// Destructure Redux Imports
const {
  selectIsSideBarOpen,
  selectIsLoading,
  selectScrollWith,
  selectEditorFullScreen,
  selectLoadingType,
  selectError,
  setEditorFullScreen,
} = uiSA;

// Ui Hook
export const useUi = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const isLoading = useSelector(selectIsLoading);
  const scrollWith = useSelector(selectScrollWith);
  const editorFullScreen = useSelector(selectEditorFullScreen);
  const loadingType = useSelector(selectLoadingType);
  const error = useSelector(selectError);

  /**
   * Handle Update Editor FullScreen
   * @param {string} editorType
   * @param {string} value
   */
  const handleUpdateEditorFullScreen = useCallback((editorType, value) => {
    const otherEditorType = editorType === "markdown" ? "preview" : "markdown";
    dispatch(
      setEditorFullScreen({
        [editorType]: value,
        [otherEditorType]: "off",
      })
    );
  }, []);

  return {
    dispatch,
    handleUpdateEditorFullScreen,
    isSideBarOpen,
    isLoading,
    loadingType,
    scrollWith,
    editorFullScreen,
    error,
    ...uiSA,
  };
};
