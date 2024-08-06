import styled from "styled-components";
export const EnrollWrapper = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
  .wrap{
    display: block;
    button{
      margin: 0 auto;
      display: block;
    }
    

  }
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    button {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .cardHolder {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    @media (min-width: 576px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px){
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      margin-bottom: 20px;
      border: 1px solid var(--gray-50);
      border-radius: 10px 10px 0 0;
      .imgWrap {
        width: 100%;
        /* @media (min-width: 768px){
          width: 270px;
        } */
        @media (min-width: 1440px){
          width: 100%;
        }
      }
      .textWrapper {
        padding: 10px;
        border-bottom: 1px solid var(--light-gray);
        h5 {
          margin: 0;
        }
        span {
          color: var(--light-gray);
        }
      }
      .timeHolder {
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        .date,
        .time {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #878787;
          font-size: 14px;
        }
      }
    }
  }
`;
