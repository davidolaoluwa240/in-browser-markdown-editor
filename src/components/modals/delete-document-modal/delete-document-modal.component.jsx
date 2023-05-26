// Modules
import React from "react";

// Components
import Modal from "react-modal";

// Style
import {
  ModalHeading,
  ModalDescription,
  ModalButton,
  modalStyles,
} from "./delete-document-modal.styles";

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
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
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
