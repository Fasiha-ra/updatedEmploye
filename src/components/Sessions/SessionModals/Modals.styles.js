import styled from "styled-components";
export const ModalsWrap = styled.div`
  padding: 30px 20px 20px;
  text-align: center;
  .backicon {
    cursor: pointer;
    img {
      width: 45px;
      height: 45px;
    }
  }
  .backicon {
    position: relative;
    background: white;
    margin-top: -38px;
    z-index: 1;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    @media (min-width: 768pxpx) {
      font-size: 24px;
    }
    @media (min-width: 1200px) {
      font-size: 30px;
    }
  }
  span {
    font-size: 20px;
    color: var(--gray-50);
    font-weight: 400;
    @media (min-width: 768pxpx) {
      font-size: 24px;
    }
    @media (min-width: 1200px) {
      font-size: 30px;
    }
  }
  .para {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    p {
      color: var(--black);
      font-size: 18px;
      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
  }
  .timeSlots {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    /* @media (min-width: 576px){
      grid-template-columns: repeat(2, 1fr);
    } */
    @media (min-width: 576px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(5, 1fr);
    }
    button {
     
      padding: 12px 4px;
      font-size: 12px;
      @media (min-width: 768px) {
        padding: 12px 15px;
        font-size: 14px;
      }
    }
    .time {
      margin: 0 auto;
    }
  }
  button {
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .react-datepicker {
    position: absolute;
    top: 128px;
    z-index: 1;
    @media (min-width: 800px) {
      top: 80px;
      right: -2px;
    }
  }
  .textWrap {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
      color: var(--black);
    }
    span {
      display: flex;
      gap: 20px;
      align-items: center;
      font-size: 16px;
      color: var(--black);
      img {
        width: 21px;
        height: 21px;
      }
    }
  }
  .sessionBtn {
    margin: 30px 0 0;
    button {
      border-radius: 20px;
      margin: 0 auto;
    }
  }
  .schedule{
    .heading{
      padding-bottom: 30px;
      p{
        font-size: 18px;
        color: var(--gray-50);
        @media (min-width: 992px){
          font-size: 25px;
        }
      }
    }
  .wrapper{
    padding: 0 30px;
    text-align: left;
    span{
      font-size: 18px;
      color: var(--black);
      @media (min-width: 992px){
          font-size: 20px;
        }
    }
    strong{
      font-size: 18px;
      padding-bottom: 20px;
      @media (min-width: 992px){
          font-size: 25px;
        }
    }
    .flex{
      padding: 15px 0 0;
      display: flex;
      gap: 20px;
      align-items: center;
      color: var(--black);
      img{
        width: 21px;
        height: 21px;
      }
    }
  }}
`;
export const StyledButton = styled.button`
  background-color: ${({ bgClr }) => bgClr || "white"};
      color: var(--black);
      border: 1px solid var(--light-gray);
      overflow: hidden;
      border-radius: 0;
`;