import styled from "styled-components";
export const ProfileWrap = styled.div`
  background-color: var(--white);
  color: var(--white);
  padding: 30px 0;
  .container {
    max-width: 1574px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .profile {
      padding-bottom: 20px;
      button {
        display: block;
        margin: 0 auto;

        &:hover {
          border-bottom: 1px solid var(--white);
          transition: all ease-in 0.3s;
        }
      }
      img {
        width: 165px;
        height: 165px;
        margin: 0 auto 15px;
        cursor: pointer;
        border-radius: 50%;
      }
    }
    form {
      width: 100%;
      .selectHolder {
        display: flex;
        flex-direction: column;
        label {
          width: 100%;
          padding: 0;
          font-size: 16px;
          font-weight: 500;
          line-height: 120%;
          color: var(--black);
          z-index: 5;
          display: flex;
          margin-bottom: 10px;
        }
        select {
          padding: 12px 25px;
          background-color: transparent;
          border-radius: 10px;
          border: 1px solid;
          outline: none;
          box-shadow: rgba(0, 0, 0, 0.09) 0 0 2px 1px;
          color: var(--body-text-25);
          position: relative;
          box-sizing: border-box;
          width: 100%;
          margin-bottom: 15px;
        }
        option {
          background-color: transparent;
        }
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        padding-bottom: 30px;
        @media (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      .btn {
        button {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
  label {
    color: var(--black);
  }
  .custom-input {
    input {
      &::placeholder {
        color: black;
      }
    }
  }
  input {
    color: black;
  }
`;
