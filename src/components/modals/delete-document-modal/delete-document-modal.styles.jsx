// Modules
import styled from "styled-components";

// Components
import { Button } from "../../button/button.component";

export const ModalHeading = styled.h6`
  font-size: 2rem;
  line-height: 26px;
  font-weight: 700;
  font-family: Roboto Slab, serif;
  margin-bottom: 2rem;
  color: #f8f9fa;
`;

export const ModalDescription = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  line-height: 24px;
  color: #ced4da;
  margin-bottom: 1rem;
`;

export const ModalButton = styled(Button)`
  font-weight: 600;
`;

export const modalStyles = {
  overlay: {
    background: "hsla(213,4%,51%,.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "380px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#151619",
    border: "none",
  },
};
