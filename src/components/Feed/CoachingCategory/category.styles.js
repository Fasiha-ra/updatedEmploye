import styled from "styled-components";
export const CoachingCategoryWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
  .cardWrap {
    display: flex;
    justify-content: center;
    gap: 10px;
    .card {
      position: relative;
      img {
        width: 415px;
        border-radius: 13px;

        @media (min-width: 1200px) {
          max-width: 205px;
          width: 100%;
        }
      }
      strong {
        position: absolute;
        color: var(--white);
        font-size: 16px;
        font-weight: 600;
        bottom: 2px;
        padding: 0 2px;
        text-align: center;
        left: 0;
        right: 0;
        @media (min-width: 576px) {
          font-size: 20px;
        }
        @media (min-width: 1200px) {
          font-size: 14px;
        }
        @media (min-width: 1440px) {
          font-size: 17px;
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 13px;
      }
    }
  }
`;
