import styled from "styled-components";
export const CoachingWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    button {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .cardHolder {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding-bottom: 30px;
    @media (min-width: 480px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px){
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      cursor: pointer;
      padding: 20px;
      .logoWrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding-bottom: 20px;
        .review {
          text-align: center;
          img {
            padding-bottom: 10px;
          }
          span {
            font-size: 12px;
            color: var(--light-gray);
          }
        }
      }
      .textContent {
        border-bottom: 1px solid var(--light-gray);
        padding-bottom: 20px;
        h5 {
          margin: 0;
        }
        span {
          font-size: 16px;
          color: var(--light-gray);
        }
      }
      .sessions {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        span {
          font-size: 16px;
          color: var(--light-gray);
        }
      }
    }
  }
`;
