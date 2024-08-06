import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({
  children,
  type,
  radiuslg,
  secondary,
  xl,
  lg,
  sm,
  width,
  hasIcon,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      $radiuslg={radiuslg}
      $secondary={secondary}
      $xl={xl}
      $lg={lg}
      $sm={sm}
      $width={width}
      hasIcon={hasIcon}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
