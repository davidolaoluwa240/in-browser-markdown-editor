// Modules
import React from "react";

// Components
import { Modal } from "../modal/modal.component";

// Style
import {
  ModalHeading,
  ModalDescription,
  ModalButton,
} from "../modal/modal.styles";

export const DeleteDocumentModal = ({
  isOpen,
  isLoading,
  headingText,
  descriptionText,
  onClose,
  onHandleDelete,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <ModalHeading>{headingText}</ModalHeading>
      <ModalDescription>{descriptionText}</ModalDescription>
      <ModalButton
        widthFull
        secondary
        isLoading={isLoading}
        onClick={onHandleDelete}
      >
        Confirm & Delete
      </ModalButton>
    </Modal>
  );
};
