// Modules
import React from "react";

// Hooks
import { useUi } from "../../../hooks";

// Components
import Modal from "react-modal";
import { ThemeToggle, InputToggle } from "../../";

// Style
import {
  ModalHeading,
  ModalButton,
} from "../delete-document-modal/delete-document-modal.styles";
import {
  SettingSubHeading,
  SettingSubDescription,
  SettingGroup,
  settingModalStyles,
  SettingToggleText,
  SettingToggleGroup,
  SettingToggleWrapper,
} from "./settings-modal.styles";

export const SettingsModal = ({ isOpen, onClose }) => {
  const {
    dispatch,
    theme,
    setTheme,
    editorFullScreen,
    setEditorFullScreen,
    scrollWith,
    setScrollWith,
  } = useUi();
  const scrollWithValue = scrollWith === "markdown" ? "off" : "on";

  /**
   * Handle Update ScrollWith
   * @param {string} value
   */
  const handleUpdateScrollWith = (value) =>
    dispatch(setScrollWith(value === "off" ? "markdown" : "preview"));

  /**
   * Handle Update Editor FullScreen
   * @param {string} value
   */
  const handleUpdateEditorFullScreen = (editorType, value) => {
    const otherEditorType = editorType === "markdown" ? "preview" : "markdown";
    const otherEditorValue =
      value === "on" ? "off" : editorFullScreen[otherEditorType];
    dispatch(
      setEditorFullScreen({
        [editorType]: value,
        [otherEditorType]: otherEditorValue,
      })
    );
  };

  /**
   * Update Page Theme
   * @param {string} theme Theme
   */
  const handleUpdateTheme = (theme) => dispatch(setTheme(theme));

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={settingModalStyles}>
      <ModalHeading>Settings</ModalHeading>

      {/* Theme Settings*/}
      <SettingGroup>
        <SettingSubHeading>Theme</SettingSubHeading>
        <SettingSubDescription>
          Switch effortlessly between dark and light mode themes for the editor.
        </SettingSubDescription>
        <ThemeToggle theme={theme} setTheme={handleUpdateTheme} />
      </SettingGroup>

      {/* Scroll Behaviour */}
      <SettingGroup>
        <SettingSubHeading>Editor Scrolling</SettingSubHeading>
        <SettingSubDescription>
          Customize the scrolling behavior of the editor to suit your
          preferences. You have the power to decide which editor controls and
          keeps an eye on the other editor while scrolling.
        </SettingSubDescription>
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
        <SettingSubDescription>
          Maximize your editing experience with our convenient full-screen mode
          toggle. Easily switch between regular and full-screen modes to
          optimize your focus and productivity.
        </SettingSubDescription>

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
        <ModalButton widthFull>Save Settings</ModalButton>
        <ModalButton widthFull>Reset Settings</ModalButton>
      </SettingToggleWrapper>
    </Modal>
  );
};
