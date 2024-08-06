import styled from "styled-components";
export const NotificationWrapper = styled.div`
  display: block;
  @media (min-width: 1200px) {
    display: flex;
    gap: 20px;
    flex: 1;
  }
  .notificationOuter {
    width: 100%;
    .notiHolder {
      background-color: var(--white);
      border-radius: 25px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      padding: 20px 20px;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        padding: 20px 40px;
      }
      .btnsHolder {
        display: flex;
        justify-content: start;
        gap: 15px;
        button {
          width: 90px;
        }
        @media (max-width: 576px) {
          flex-wrap: wrap;
          gap: 5px;
          button {
            &:nth-child(1) {
              width: 40px;
              padding: 12px 10px;
            }
          }
        }
      }
      .heading {
        color: var(--blue);
        display: flex;
        align-items: center;
        gap: 20px;
        padding-bottom: 20px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .parentWrap {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 20px;
        .innerFlex {
          display: flex;
          align-items: start;
          gap: 10px;
          img {
            width: 48px;
            height: 48px;
          }
          .textHolder {
            p {
              color: var(--light-gray);
              font-size: 15px;
              line-height: 25px;
              &:nth-child(1) {
                margin: 0;
              }
              @media (min-width: 576px) {
                font-size: 18px;
              }
              span {
                color: var(--blue);
              }
            }
            span {
              color: var(--light-gray);
              font-size: 14px;
              @media (min-width: 576px){
                font-size: 16px;
              }
            }
            button{
                margin: 20px 0 0;
            }
          }
          .personicon{
            font-size: 48px;
            color: var(--blue);
          }
        }
        .icon {
          cursor: pointer;
          position: relative;
          color: var(--light-gray);
          .dropdown {
            display: flex;
            flex-direction: column;
            text-align: center;
            position: absolute;
            top: 25px;
            left: -30px;
            width: 100px;
            background: var(--white);
            box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
            z-index: 9;
            opacity: ${({ $toggleDropDown }) => ($toggleDropDown ? "1" : "0")};
            transform: translateY(
                ${({ $toggleDropDown }) => ($toggleDropDown ? "0" : "50px")}
              )
              translateX(-50%);
            transition: 0.4s;
            a {
              padding: 10px 20px;
              font-size: 16px;
              &:nth-child(2) {
                background-color: var(--blue);
                color: var(--white);
              }
            }
          }
        }
      }
    }
  }

    .closeWrap{
      padding: 20px 40px;
      text-align: center;
      img{
        width: 83px;
        height: 83px;
        margin: 0 auto;
      }
      h2{
        color: var(--red);
        padding: 10px 0;
        @media (min-width: 576px){
padding: 20px 0 40px;
        }
      }
      .paraWrap{
        text-align: left;
        span{
          font-size: 18px;
          @media (min-width: 576px){
            font-size: 20px;
          }
         
        }
        .para{
          margin-top: 20px;
          border: 1px solid var(--red);
          p{
            font-size: 18px;
            line-height: 30px;
            padding: 15px;
            @media (min-width: 576px){
              padding: 30px;
              font-size: 20px;
            }
          }
        }
      }
    }
  
`;
