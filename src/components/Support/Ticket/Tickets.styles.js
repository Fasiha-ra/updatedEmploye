import styled from "styled-components";
export const TicketsWrap = styled.div`
  margin-bottom: 20px;
  .cardHolder {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .ticketCard {
      background-color: var(--white);
      border-radius: 25px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      padding: 20px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 20px;
      img {
        width: 47px;
        height: 47px;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
      }
      .btnHolder {
        display: flex;
        justify-content: end;
        align-content: end;
        flex-direction: column;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
        span {
          margin-bottom: 30px;
        }
      }
    }
  }
`;
