// Modules
import styled from "styled-components";

// Styles
import {
  ModalDescription,
  modalStyles,
  ModalButton,
} from "../delete-document-modal/delete-document-modal.styles";

export const SettingSubHeading = styled.p`
  font-size: 1.7rem;
  line-height: 24px;
  font-weight: 600;
  font-family: Roboto Slab, serif;
  margin-bottom: 0.7rem;
  color: #f8f9fa;
`;

export const SettingSubDescription = styled(ModalDescription)`
  margin-bottom: 0.5rem;
`;

export const SettingGroup = styled.div`
  margin-bottom: 1.5rem;
  &:not(:last-child) {
  }
`;

export const SettingToggleText = styled.span`
  color: rgb(90, 96, 105);
  font-size: 1.4rem;
  font-weight: 500;

  ${({ isActive }) => isActive && "color: #f8f9fa"}
`;

export const SettingToggleGroup = styled.div`
  &:last-child {
    margin-left: 4.5rem;
  }

  > ${SettingToggleText} {
    font-size: 1.6rem;
    color: #f8f9fa;
  }
`;

export const SettingToggleWrapper = styled.div`
  display: flex;
  align-items: center;

  ${ModalButton} {
    &:not(:last-child) {
      margin-right: 0.7rem;
    }
    margin-top: 1rem;
  }
`;

export const settingModalStyles = {
  ...modalStyles,
  content: { ...modalStyles.content, maxWidth: "600px" },
};
