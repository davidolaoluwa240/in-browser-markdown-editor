// Modules
import React from "react";

// Hooks
import { useUi } from "../../hooks";

// Style
import { ButtonBase, StyledThreeDots } from "./button.styles";

export const Button = ({ children, isLoading, ...buttonProps }) => {
  const { isTabletDevice } = useUi();
  const { width, height } = {
    width: isTabletDevice ? "25" : "40",
    height: isTabletDevice ? "20" : "30",
  };

  return (
    <ButtonBase disabled={isLoading} {...buttonProps}>
      <StyledThreeDots
        height={height}
        width={width}
        radius="9"
        color="#ffffff"
        ariaLabel="Loading"
        visible={isLoading}
      />
      <span> {children} </span>
    </ButtonBase>
  );
};

Button.defaultProps = {
  isLoading: false,
};
