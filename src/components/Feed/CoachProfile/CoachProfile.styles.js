import styled from "styled-components";
export const CoachingProfileWrap = styled.div`
  .profileCard {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 1200px) {
      display: block;
    }
    .card {
      margin-bottom: 20px;
      .profile {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        @media (min-width: 1440px) {
          justify-content: space-evenly;
        }
        img {
          width: 86px;
        }
        .textWrap {
          h5 {
            margin: 0;
            padding-bottom: 10px;
            @media (min-width: 1440px) {
              font-size: 22px;
            }
          }
          span {
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 500;
            color: var(--light-gray);
            @media (min-width: 1440px) {
              font-size: 20px;
            }
          }
          .review {
            padding-top: 10px;
            display: flex;
            gap: 6px;
            img {
              width: 79px;
              height: 15px;
            }
            span {
              font-size: 14px;
              color: var(--light-gray);
              font-weight: 500;
              @media (min-width: 1440px) {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
  button {
    display: block;
    margin: 0 auto;
  }
`;
