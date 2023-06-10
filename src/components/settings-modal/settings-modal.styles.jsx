// Modules
import styled from "styled-components";

// Components
import { Modal } from "../modal/modal.component";

// Styles
import {
  ModalDescription,
  ModalButton,
  ModalHeading,
} from "../modal/modal.styles";

export const SettingSubHeading = styled.p`
  font-size: 1.7rem;
  line-height: 24px;
  font-weight: 600;
  font-family: Roboto Slab, serif;
  margin-bottom: 0.6rem;
  color: #f8f9fa;
`;

export const SettingDescription = styled(ModalDescription)`
  margin-bottom: 0.5rem;
`;

export const SettingGroup = styled.div`
  margin-bottom: 1.7rem;
`;

export const SettingToggleText = styled.span`
  color: ${({ isActive }) => (isActive ? "#f8f9fa" : "rgb(90, 96, 105)")};
  font-size: 1.4rem;
  font-weight: 500;
`;

export const SettingToggleGroup = styled.div`
  &:last-child {
    margin-left: 4.5rem;
  }

  > ${SettingToggleText} {
    font-size: 1.5rem;
    color: #f8f9fa;
  }
`;

export const SettingToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SettingsButtonGroup = styled.div`
  display: flex;
  align-items: center;

  ${ModalButton} {
    &:not(:last-child) {
      margin-right: 0.7rem;
    }
    margin-top: 1rem;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    ${ModalButton} {
      &:not(:last-child) {
        margin-right: 0;
      }
      margin-top: 0.6rem;
    }
  }
`;

export const StyledSettingsModal = styled(Modal)`
  .ReactModal__Content {
    max-width: 600px;

    @media screen and (max-width: 400px) {
      height: 90%;
    }
  }
`;

export { ModalHeading, ModalButton };
