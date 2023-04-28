// Modules
import React from "react";

// Style
import { ButtonBase } from "./button.styles";

export const Button = ({ color, as, children, ...buttonProps }) => {
  return (
    <ButtonBase as={as} color={color} {...buttonProps}>
      {children}
    </ButtonBase>
  );
};
