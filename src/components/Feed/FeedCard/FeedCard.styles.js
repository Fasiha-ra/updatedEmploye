import styled from "styled-components";
export const FeedCardWrap = styled.div`
  .post {
    background-color: var(--white);
    border-radius: 25px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    padding: 20px 10px;
    margin-bottom: 20px;
    .blogHeader {
      display: flex;
      justify-content: space-between;
      align-items: start;
      padding-bottom: 20px;
      .logo {
        display: flex;
        gap: 10px;
        .titleHolder {
          .tags {
            display: flex;
            gap: 10px;
            span {
              color: var(--primary-text-color);
              font-size: 16px;
              font-weight: 400;
            }
          }
        }
      }

      .icon {
        color: var(--light-gray);
      }
    }
    .para {
      padding-bottom: 10px;
     
      @media (max-width: 1200px) {
        width: 100%;
      }
      @media (max-width: 1440px) {
        max-width:700px;
        width: 100%;
      }
      p {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
      }
      span {
        color: var(--primary-text-color);
        cursor: pointer;
      }
    }
    .flex {
      display: block;
      @media (min-width: 470px) {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
      .replyWrap {
      padding: 20px 0 0;
      display: flex;
      justify-content: start;
      gap: 20px;
      button {
        font-size: 14px;
        color: var(--light-gray);
        display: flex;
        gap: 5px;
        align-content: center;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
      .counts {
        span {
          font-size: 14px;
          color: var(--light-gray);
          padding: 0 0 0 20px;
        }
      }
    }
  }
  .postBtn {
    button {
      display: flex;
      justify-content: center;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
