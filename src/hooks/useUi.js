// Hooks
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  setSideBarVisibility,
} = uiSA;

// Ui Hook
export const useUi = () => {
  const isTabletDevice = useMediaQuery("only screen and (max-width: 900px)");
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
  const handleUpdateEditorFullScreen = useCallback(
    (editorType, value) => {
      const otherEditorType =
        editorType === "markdown" ? "preview" : "markdown";
      const otherEditorValue = isTabletDevice
        ? value === "on"
          ? "off"
          : "on"
        : "off";
      dispatch(
        setEditorFullScreen({
          [editorType]: value,
          [otherEditorType]: otherEditorValue,
        })
      );
    },
    [isTabletDevice]
  );

  /**
   * Handle Toggle Menu Visibility
   */
  const handleToggleMenuVisibility = useCallback(
    () => dispatch(setSideBarVisibility(!isSideBarOpen)),
    [isSideBarOpen]
  );

  return {
    dispatch,
    handleUpdateEditorFullScreen,
    handleToggleMenuVisibility,
    isSideBarOpen,
    isLoading,
    loadingType,
    scrollWith,
    editorFullScreen,
    error,
    isTabletDevice,
    ...uiSA,
  };
};
