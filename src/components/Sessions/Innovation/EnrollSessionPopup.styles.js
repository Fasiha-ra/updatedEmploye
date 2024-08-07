import styled from "styled-components";
export const SessionPopup = styled.div`
  padding: 40px 20px;
  .titleHolder {
    font-size: 15px;
    line-height: 19px;
    border-bottom: 1px solid #000;
    margin: 10px 0 20px;
    padding: 10px;
    @media (min-width: 992px) {
      font-size: 17px;
      line-height: 21px;
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      display: block;
      @media (min-width: 992px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
  .flex {
    display: block;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
  input {
    color: black;
  }
  .dateLabel {
    width: 100%;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    color: var(--matte-black);
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
  .date-picker {
    padding: 12px 25px 10px;
    border-radius: 10px;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    position: relative;
    input {
      border: none;
      outline: none;
      background: transparent;
      color: var(--black);
      width: 100%;
      font-weight: 300;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .timerHolder {
    span {
      display: block;
      width: 100%;
      padding: 0;
      font-size: 16px;
      font-weight: 500;
      line-height: 120%;
      color: var(--matte-black);
      z-index: 5;
      margin-bottom: 10px;
    }
    .timeWrap{
        display: flex;
        gap: 10px;
    }
    .time {
      padding: 12px 5px ;
      border-radius: 10px;
      outline: none;
      box-sizing: border-box;
      border: 1px solid;
      box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
      position: relative;
      display: flex;
      margin-bottom: 10px;
      img{
        width: 16px;
        height: 16px;
      }
      input{
        border: none; 
        outline: none;
      }
    }
  }
  .btn{
    display: flex;
    justify-content: center;
  }
  select{
    padding: 14px 25px 12px;
    border-radius: 10px;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
    position: relative;

  }
`;
