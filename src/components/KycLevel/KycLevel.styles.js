import styled from "styled-components";
const getBackgroundColor = (level) => {
  return level >= 50 ? "#CCEAFF" : "var(--gray-50)";
};
export const StyledKycLevel = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  height: 30px;
  background: #EAEAEA;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ $level }) => $level + "%"};
    background: ${({ $level }) => getBackgroundColor($level)};
    border-radius: 8px;
  }
`;
