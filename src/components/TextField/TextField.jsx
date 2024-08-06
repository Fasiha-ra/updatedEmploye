"use client";
import React, { useState } from "react";
import {
  IconWrapper,
  InputWrap,
  StyledInput,
  StyledTexfield,
  HelperText, // Import the new HelperText component
  ErrorText, // Import the new ErrorText component
} from "./Texfield.styles";

const TextField = ({
  hasicon,
  placeholder,
  type,
  onChange,
  value,
  label,
  field_Name,
  height,
  variant = "input",
  noMargin,
  bgClr,
  border,
  parentClass,
  helperText,
  error,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleField = (e) => {
    setIsClicked(!isClicked);
  };

  return (
    <InputWrap>
      {label && <label htmlFor={field_Name}>{label}</label>}
      <StyledTexfield
        onClick={handleField}
        $hasicon={hasicon}
        $variant={variant}
        $noMargin={noMargin}
        className={parentClass}
        $bgClr={bgClr}
        $border={border}
      >
        <IconWrapper>{hasicon}</IconWrapper>
        {variant === "input" && (
          <StyledInput
            {...props}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            id={field_Name}
            autoComplete="off"
            aria-describedby={helperText ? `${field_Name}-helper-text` : undefined}
          />
        )}

        {variant === "textarea" && (
          <textarea
            {...props}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            id={field_Name}
            autoComplete="off"
            aria-describedby={helperText ? `${field_Name}-helper-text` : undefined}
          ></textarea>
        )}
      </StyledTexfield>
      {helperText && <HelperText id={`${field_Name}-helper-text`}>{helperText}</HelperText>}
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrap>
  );
};

export default TextField;
