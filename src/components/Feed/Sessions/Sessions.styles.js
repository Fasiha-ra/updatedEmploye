import styled from "styled-components";
export const SessionsWrapper = styled.div`
  .sessionCard {
    .card {
      img {
        margin: 0 auto 10px;
        width: 100%;

        @media (min-width: 1200px) {
          max-width: 400px;
        }
      }
      h5 {
        margin: 0;
        padding-bottom: 10px;
        @media (min-width: 1440px) {
          font-size: 20px;
        }
      }
      span {
        padding-bottom: 10px;
        font-size: 13px;
        line-height: 16px;
        @media (min-width: 1440px) {
          font-size: 18px;
        }
      }
      p {
        font-size: 13px;
        font-weight: 400;
        line-height: 26px;
        @media (min-width: 1440px) {
          font-size: 16px;
        }
        span {
          color: var(--primary-text-color);
          cursor: pointer;
        }
      }
    }
  }
`;
