import styled from "styled-components";
export const TicketRaisedWrap = styled.div`
  .headingHolder {
    display: flex;
    gap: 10px;
    justify-content: start;
    align-items: flex-start;
    padding-bottom: 20px;
    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
  .card {
    background-color: var(--white);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-bottom: 20px;

    .ticketCard {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      padding-bottom: 30px;
      .imgHolder {
        display: flex;
        gap: 20px;
      }
      img {
        width: 47px;
        height: 47px;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
      }
      .ticketID {
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
    .para {
      padding: 10px 0 30px;
      border-top: 1px solid #000;
      p {
        padding-top: 20px;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .btnHolder {
      display: flex;
      justify-content: end;
    }
  }
  .emailWrapper{
    border-radius: 0;
  }
`;
