// Modules
import React from "react";

// Components
import { ThreeDots } from "react-loader-spinner";

// Style
import { ButtonBase, buttonSpinnerStyle } from "./button.styles";

export const Button = ({ color, as, children, isLoading, ...buttonProps }) => {
  return (
    <ButtonBase as={as} color={color} disabled={isLoading} {...buttonProps}>
      <ThreeDots
        height="30"
        width="40"
        radius="9"
        color="#ffffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={buttonSpinnerStyle}
        visible={isLoading}
      />
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  isLoading: false,
};
