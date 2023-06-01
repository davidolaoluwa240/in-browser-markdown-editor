// Modules
import React from "react";

// Styles
import {
  StyledReactModalExhanced,
  ModalCloseIcon,
  ModalCloseIconContainer,
} from "./modal.styles";

export const Modal = ({
  children,
  showCloseIcon,
  onRequestClose,
  ...props
}) => {
  return (
    <StyledReactModalExhanced onRequestClose={onRequestClose} {...props}>
      <ModalCloseIconContainer
        showCloseIcon={showCloseIcon}
        onClick={onRequestClose}
      >
        <ModalCloseIcon />
      </ModalCloseIconContainer>
      {children}
    </StyledReactModalExhanced>
  );
};

Modal.defaultProps = {
  showCloseIcon: true,
};
