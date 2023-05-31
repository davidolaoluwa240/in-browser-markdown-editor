// Modules
import React from "react";

// Style
import { ButtonBase, StyledThreeDots } from "./button.styles";

export const Button = ({ children, isLoading, ...buttonProps }) => {
  return (
    <ButtonBase disabled={isLoading} {...buttonProps}>
      <StyledThreeDots
        height="30"
        width="40"
        radius="9"
        color="#ffffff"
        ariaLabel="Loading"
        visible={isLoading}
      />
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  isLoading: false,
};
