import styled from "styled-components";
export const ModalHolder = styled.div`
  padding: 40px 30px 20px;
  position: relative;
  .subTitle {
    position: absolute;
    top: 18px;
    left: 49px;
    z-index: 1;
    background-color: var(--blue);
    padding: 10px;
    color: var(--white);
    border-radius: 15px;
  }
  .textAreaHolder {
    border-radius: 10px;
    position: relative;
    textarea {
      padding: 14px 7px;
    }
  }
  .inputHolder {
    margin-top: 20px;
    height: 77px;
    input {
      color: black;
      &::placeholder {
        color: #6d6d6d;
        font-size: 18px;
      }
    }
  }
  .chatHolder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .chat {
      display: flex;
      gap: 30px;
      align-items: center;
      .chatWrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
    .btnHolder {
      button {
        width: 150px;
      }
    }
  }
`;
