"use Client";
import styled from "styled-components";
export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(50, 59, 75, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
  padding: 20px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
export const ContentHolder = styled.div`
  max-width: ${({ width }) => (width ? width : "")};
  width: ${({ width }) => (width ? "100%" : "")};
  padding: ${({ padding }) => (padding ? padding : "")}; 
  background: ${({ bg }) => (bg ? bg : "")}; 
  border-radius: ${({ radius }) => (radius ? radius : "20px")};
  animation: myAnim 0.3s ease;
  background: var(--white);
  max-height: 100%;
  overflow-y: auto;
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
export const Head = styled.div`
  width: 100%;
  padding: 10px 20px 10px 10px;
  min-height: auto;
  position: relative;
`;
export const Closer = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
  width: 30px;
  height: 30px;
  z-index: 1;
  border: 2px solid ${({ $border }) => ($border ? $border : "var(--gray-30)")};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ color }) => (color ? color : "var(--gray-30)")};
`;
