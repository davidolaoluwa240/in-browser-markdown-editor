// Modules
import React from "react";

// Hooks
import { useContext, useCallback } from "react";
import { useUi } from "../../hooks";

// Data
import { DEFAULT_UI_SETTINGS_ITEM } from "../../data";

// Contexts
import { ThemeContext } from "styled-components";

// Components
import { ThemeToggle, InputToggle } from "../";

// Style
import {
  SettingSubHeading,
  SettingDescription,
  SettingGroup,
  SettingToggleText,
  SettingToggleGroup,
  SettingToggleWrapper,
  StyledSettingsModal,
  ModalHeading,
  ModalButton,
} from "./settings-modal.styles";

export const SettingsModal = ({ isOpen, onClose }) => {
  const { theme, handleUpdateTheme } = useContext(ThemeContext);
  const {
    dispatch,
    editorFullScreen,
    setEditorFullScreen,
    scrollWith,
    setScrollWith,
    startAddingAndUpdatingUiSettings,
    isLoading,
    loadingType,
    handleUpdateEditorFullScreen,
  } = useUi();
  const isUpdatingUi = isLoading && loadingType === "updating";
  const scrollWithValue = scrollWith === "markdown" ? "off" : "on";

  /**
   * Handle Update ScrollWith
   * @param {string} value
   */
  const handleUpdateScrollWith = useCallback(
    (value) =>
      dispatch(setScrollWith(value === "off" ? "markdown" : "preview")),
    []
  );

  /**
   * Handle Update Ui Settings
   * @param {Object} uiSettings
   */
  const handleUpdateUiSettings = useCallback(
    (uiSettings = { scrollWith, editorFullScreen }) =>
      () => {
        dispatch(startAddingAndUpdatingUiSettings(uiSettings));
      },
    [scrollWith, editorFullScreen]
  );

  /**
   * Handle Reset Ui Setting
   */
  const handleResetUiSettings = useCallback(() => {
    // 1). Reset User Ui Settings
    handleUpdateUiSettings(DEFAULT_UI_SETTINGS_ITEM)();

    // 2). Reset App Theme
    handleUpdateTheme("dark");
  }, []);

  return (
    <StyledSettingsModal isOpen={isOpen} onRequestClose={onClose}>
      <ModalHeading>Settings</ModalHeading>

      {/* Theme Settings*/}
      <SettingGroup>
        <SettingSubHeading>Theme</SettingSubHeading>
        <SettingDescription>
          Switch effortlessly between dark and light mode themes for the editor.
        </SettingDescription>
        <ThemeToggle theme={theme} setTheme={handleUpdateTheme} />
      </SettingGroup>

      {/* Scroll Behaviour */}
      <SettingGroup>
        <SettingSubHeading>Editor Scrolling</SettingSubHeading>
        <SettingDescription>
          Customize the scrolling behavior of the editor to suit your
          preferences. You have the power to decide which editor controls and
          keeps an eye on the other editor while scrolling.
        </SettingDescription>
        <InputToggle
          onContent={<SettingToggleText>Preview</SettingToggleText>}
          offContent={<SettingToggleText>Markdown</SettingToggleText>}
          value={scrollWithValue}
          onChange={handleUpdateScrollWith}
        />
      </SettingGroup>

      {/* Full Screen Mode */}
      <SettingGroup>
        <SettingSubHeading>Full Screen</SettingSubHeading>
        <SettingDescription>
          Maximize your editing experience with our convenient full-screen mode
          toggle. Easily switch between regular and full-screen modes to
          optimize your focus and productivity.
        </SettingDescription>

        <SettingToggleWrapper>
          <SettingToggleGroup>
            <SettingToggleText>Markdown</SettingToggleText>
            <InputToggle
              onContent={<SettingToggleText>On</SettingToggleText>}
              offContent={<SettingToggleText>Off</SettingToggleText>}
              value={editorFullScreen.markdown}
              onChange={handleUpdateEditorFullScreen.bind(null, "markdown")}
            />
          </SettingToggleGroup>

          <SettingToggleGroup>
            <SettingToggleText>Preview</SettingToggleText>
            <InputToggle
              onContent={<SettingToggleText>On</SettingToggleText>}
              offContent={<SettingToggleText>Off</SettingToggleText>}
              value={editorFullScreen.preview}
              onChange={handleUpdateEditorFullScreen.bind(null, "preview")}
            />
          </SettingToggleGroup>
        </SettingToggleWrapper>
      </SettingGroup>

      <SettingToggleWrapper>
        <ModalButton
          widthFull
          tertiary
          isLoading={isUpdatingUi}
          onClick={handleUpdateUiSettings()}
        >
          Save Settings
        </ModalButton>
        <ModalButton
          widthFull
          secondary
          disabled={isUpdatingUi}
          onClick={handleResetUiSettings}
        >
          Reset Settings
        </ModalButton>
      </SettingToggleWrapper>
    </StyledSettingsModal>
  );
};
