import styled from "styled-components";
export const ScheduleWrap = styled.div`
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
    .card {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding-bottom: 20px;
      @media (min-width: 680px) {
        flex-direction: row;
        justify-content: space-between;
      }
      .imgHolder {
        img {
          width: 372px;
        }
      }
      .textHolder {
        width: 100%;
        max-width: 370px;
        span {
          color: var(--gray-30);
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
        }
        p {
          color: var(--gray-30);
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          @media (min-width: 768px) {
            line-height: 30px;
          }
        }
      }
    }
  }
`;
