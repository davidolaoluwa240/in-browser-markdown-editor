// Modules
import React from "react";

// Hooks
import { useDocument } from "../../../hooks";

// Components
import Modal from "react-modal";

// Style
import {
  ModalHeading,
  ModalDescription,
  ModalButton,
  modalStyles,
} from "./delete-document-modal.styles";

export const DeleteDocumentModal = ({ isOpen, onHandleDelete, onClose }) => {
  const { document } = useDocument();

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      <ModalHeading>Delete this document?</ModalHeading>
      <ModalDescription>
        Are you sure you want to delete ‘{document?.fileName}.md’ document and
        its contents? This action cannot be reversed.
      </ModalDescription>
      <ModalButton widthFull onClick={onHandleDelete}>
        Confirm & Delete
      </ModalButton>
    </Modal>
  );
};
