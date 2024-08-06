import styled from "styled-components";
export const ProgressWrapper = styled.div`
  .progressWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    position: relative;
    padding-bottom: 20px;
    .grade {
      position: absolute;
      top: 4px;
      left: 9px;
      right: 0;
      z-index: 1;
    }
    strong{
        color: var(--light-gray);
    }
  }
`;
