import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  min-width: 90px;
  max-width: ${({ $width }) => $width && $width};
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 30px;
  background: linear-gradient(90deg, #0059c7 0%, #00a2c9 100%);
  outline: none;
  border: none;
  transition: 0.3s all ease-in-out;
  position: relative;
  @media (max-width: 575px) {
    padding: 12px 15px;
    font-size: 14px;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  ${({ type }) =>
    type === "transparent" &&
    css`
      background: transparent;
      color: var(--primary-text-color);
      border: none;
      outline: none;
      justify-content: start;
      padding: 0;
      &:hover {
        box-shadow: none;
      }
    `}
  ${({ type }) =>
    type === "outline" &&
    css`
      position: relative;
      background: var(--white);
      color: var(--black);
      border: 1px solid var(--light-gray);
      overflow: hidden;
    `}
  ${({ type }) =>
    type === "white" &&
    css`
      background: var(--white);
      color: var(--dark);
    `}
  ${({ type }) =>
    type === "dark" &&
    css`
      background: var(--blue);
      color: var(--white);
    `} 
  ${({ $xl }) =>
    $xl &&
    css`
      font-size: 20px;
      line-height: 24px;
      padding: 12px 15px;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        padding: 12px 15px;
      }
    `}
        ${({ $lg }) =>
    $lg &&
    css`
      font-size: 18px;
      line-height: 23px;
    `}
        ${({ $sm }) =>
    $sm &&
    css`
      font-size: 14px;
      line-height: 18px;
      padding: 8px 13px;
    `}

    ${({ hasIcon }) =>
    hasIcon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    `}
`;
