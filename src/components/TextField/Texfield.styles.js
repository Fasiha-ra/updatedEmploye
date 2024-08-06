import styled, { css } from "styled-components";

export const InputWrap = styled.div`
  width: 100%;
  position: relative;
  label {
    width: 100%;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    color: var(--matte-black);
    z-index: 5;
    display: flex;
    margin-bottom: 10px;
    @media screen and (min-width: 1441px) {
      font-size: 18px;
    }
  }
`;

export const StyledTexfield = styled.div`
  padding: 12px 25px;
  border-radius: ${({ $variant }) => ($variant === "input" ? "10px" : "20px")};
  background-color: ${({ $bgClr }) => $bgClr && $bgClr};
  border: 1px solid ${({ $border }) => $border && $border};
  box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
  color: var(--body-text-25);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: ${({ $noMargin }) => ($noMargin ? "0" : "15px")};
  
  ${({ $hasicon }) =>
    $hasicon &&
    css`
      padding: 8px 50px;
    `}
  textarea {
    font-size: 16px;
    font-weight: 300;
    background-color: rgba(255, 255, 255, 0.37);
    height: 96px;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    padding: 0;
    color: var(--body-text-25);
    &::placeholder {
      color: var(--body-text-25);
    }
  }
`;

export const StyledTextareaWrap = styled.div`
  padding: 12px 25px;
  border-radius: 20px;
  min-height: 120px;
  background-color: var(--light-gray);
  color: var(--body-text-25);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${({ $hasicon }) =>
    $hasicon &&
    css`
      padding: 12px 25px;
    `}
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 8px;
  left: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--primary-blue);
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: var(--white);
  width: 100%;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  font-family: var(--base-font-sans-serif);
  &::placeholder {
    color: var(--gray-50);
  }
  @media (min-width: 576px) {
    font-size: 16px;
  }
`;
export const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  background: transparent;
  color: var(--matte-black);
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  font-family: var(--base-font-sans-serif);
  &::placeholder {
    color: var(--body-text-25);
  }
`;
export const OtpInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  input {
    max-width: 45px;
    min-height: 45px;
    color: var(--white);
    text-align: center;
    border: none;
    outline: none;
    border-radius: 9px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: #5E6A79;
    @media (min-width: 1440px) {
      min-height: 63px;
      min-width: 84px;
    }
    &::placeholder {
      font-size: 35px;
      line-height: 20px;
      color: var(--gray-150);
      background-color: var(--priamry);
    }
  }
`;
export const SearchbarWrap = styled.div`
  padding: 0 10px;
  .customClass {
    border-radius: 50px;
    width: 100%;
    max-width: 300px;
    height: 40px;
    @media (min-width: 576px) {
      max-width: 350px;
    }
    @media (min-width: 1440px) {
      max-width: 526px;
    }

    input {
      color: black !important;
      &::placeholder {
        color: black;
      }
    }
  }
`;
export const HelperText = styled.div`
  font-size: 12px; // Adjust font size
  color: red; // Adjust color
  margin-top: 5px;
`;

export const ErrorText = styled.div`
  font-size: 12px; // Adjust font size
  color: red; // Adjust color
  margin-top: 5px;
`;