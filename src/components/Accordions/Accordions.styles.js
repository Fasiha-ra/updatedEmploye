import styled from "styled-components";
export const AccordionWrap= styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled.div`
  padding: 30px 15px;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: start;
  gap: 20px;
  align-items: center;
  user-select: none;
`;

export const AccordionContent = styled.div`
  background-color: #fff;
  padding: 10px 15px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
