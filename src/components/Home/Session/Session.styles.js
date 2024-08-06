import styled from "styled-components";
export const SessionWrap = styled.div`
  .sessionHolder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    background-color: var(--white);
    border-radius: 25px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-bottom: 20px;
    border-left: 5px solid var(--primary-blue);
    @media (min-width: 768px){
      flex-direction: row;
      justify-content: space-between;
    }
    .imgHolder{
      img{
        padding-top:10px;
      }
    }
    .imgHolder, .textHolder{
      margin: 0 auto;
    }
    .textHolder {
      .nameWrapper {
        display: flex;
        justify-content: start;
        gap: 20px;
      }
    }
    .btnWrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap:wrap ;
      gap: 10px;
      .timeHolder {
        display: flex;
        gap: 10px;
        .date,
        .time {
          color: #878787;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
      button{
        @media (max-width: 576px){
          width: 130px;
        }
      }
    }
  }
`;
