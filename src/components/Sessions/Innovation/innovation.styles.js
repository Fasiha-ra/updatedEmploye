import styled from "styled-components";
export const InnovationWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: start;
  gap: 5px;
  .backimg{
    cursor: pointer;
  }
  .sessionDetail {
    display: block;
    margin: 0 auto;
    
    @media (min-width: 1200px){
        display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
    }
    .textHolder {
      h2 {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        @media (min-width: 1200px){
            font-size: 28px;
            line-height: 32px;
        }
      }
      .auhtorDetail {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 20px;
        .name {
          h5 {
            margin-bottom: 20px;
          }
          span {
            color: var(--light-gray);
            font-size: 16px;
          }
          img {
            width: 78px;
            height: 15px;
          }
        }
      }
      .flex {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        img {
          width: 20px;
          height: 20px;
        }
        span {
          font-size: 20px;
        }
      }
    }
    .thumb {
      img {
        width: 540px;
        margin: 0 auto;
        padding-top: 20px;
        
        @media (min-width: 1440px) {
          width: 740px;
          height: 483px;
        }
      }
    }
  }
  .sessionPara{
    margin: 20px 0;
    @media (min-width: 992px){
        margin: 40px 0;
    }
    p{
        font-size: 16px;
        line-height: 24px;
        @media (min-width: 992px){
            font-size: 20px; 
            line-height: 30px;
        }
    }
  }
`;
