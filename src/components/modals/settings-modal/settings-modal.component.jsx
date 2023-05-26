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
  const { theme, setTheme } = useUi();

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={settingModalStyles}>
      <ModalHeading>Settings</ModalHeading>

      {/* Theme Settings*/}
      <SettingGroup>
        <SettingSubHeading>Theme</SettingSubHeading>
        <SettingSubDescription>
          Switch effortlessly between dark and light mode themes for the editor.
          Enjoy the flexibility to customize the visual appearance of the editor
          based on your preference. Choose the mode that best suits your style
          and enhances your editing experience.
        </SettingSubDescription>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </SettingGroup>

      {/* Scroll Behaviour */}
      <SettingGroup>
        <SettingSubHeading>Editor Scrolling</SettingSubHeading>
        <SettingSubDescription>
          Customize the scrolling behavior of the editor to suit your
          preferences. You have the power to decide which editor controls and
          keeps an eye on the other editor while scrolling. Enjoy a seamless
          editing experience tailored to your needs.
        </SettingSubDescription>
        <InputToggle
          onContent={<SettingToggleText>Preview</SettingToggleText>}
          offContent={<SettingToggleText>Markdown</SettingToggleText>}
          value={"off"}
        />
      </SettingGroup>

      {/* Full Screen Mode */}
      <SettingGroup>
        <SettingSubHeading>Full Screen</SettingSubHeading>
        <SettingSubDescription>
          Maximize your editing experience with our convenient full-screen mode
          toggle. Easily switch between regular and full-screen modes to
          optimize your focus and productivity. Enjoy a distraction-free
          environment that allows you to immerse yourself fully in your editing
          tasks.
        </SettingSubDescription>

        <SettingToggleWrapper>
          <SettingToggleGroup>
            <SettingToggleText>Markdown</SettingToggleText>
            <InputToggle
              onContent={<SettingToggleText>On</SettingToggleText>}
              offContent={<SettingToggleText>Off</SettingToggleText>}
              value={"off"}
            />
          </SettingToggleGroup>

          <SettingToggleGroup>
            <SettingToggleText>Preview</SettingToggleText>
            <InputToggle
              onContent={<SettingToggleText>On</SettingToggleText>}
              offContent={<SettingToggleText>Off</SettingToggleText>}
              value={"off"}
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
