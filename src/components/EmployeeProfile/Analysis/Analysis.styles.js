import styled from "styled-components";
export const AnalysisWrap = styled.div`
  .analysis {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .flex {
      display: flex;
      gap: 20px;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        @media (min-width: 768px){
            width: 60px;
            height: 60px;
        }
      }
      .text {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
