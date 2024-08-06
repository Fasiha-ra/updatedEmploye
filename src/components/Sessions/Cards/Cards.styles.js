import styled from "styled-components";
export const CardsWrap = styled.div`
  .cardHolder {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    .card {
      
      width: 100%;
      @media  (min-width: 576px){
        width: 200px;
      }
      @media (min-width:1200px){
        width: 250px;
      }
      @media (min-width:1440px){
        width: 300px;
      }
      @media (min-width:1600px){
        width: 350px;
      }
      img {
        padding-bottom: 10px;
        @media (max-width:576px){
          width: 100%;
        }
      }
      span{
        color: var(--blue);
      }
      .textWrap {
        min-height: 180px;
        p {
          font-size: 16px;
          margin: 0;
        }
      }

      .starHolder {
        span {
          font-size: 16px;
          font-weight: bolder;
          color: var(--black);
        }
        img{
          width: 79px;
          height: 25px;
        }
      }
      button{
        padding: 12px 10px;
      }
      
    }
  }
`;
