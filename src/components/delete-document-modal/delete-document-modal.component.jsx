// Modules
import React from "react";

// Components
import Modal from "react-modal";

// Style
import {
  ModalHeading,
  ModalDescription,
  ModalButton,
} from "../modal/modal.styles";

export const DeleteDocumentModal = ({
  isOpen,
  isLoading,
  loadingType,
  onHandleDelete,
  headingText,
  descriptionText,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <ModalHeading>{headingText}</ModalHeading>
      <ModalDescription>{descriptionText}</ModalDescription>
      <ModalButton
        widthFull
        isLoading={isLoading && loadingType === "deleting"}
        onClick={onHandleDelete}
      >
        Confirm & Delete
      </ModalButton>
    </Modal>
  );
};
