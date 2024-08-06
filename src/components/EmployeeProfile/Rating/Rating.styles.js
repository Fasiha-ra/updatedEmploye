import styled from "styled-components";
export const RatingWrap = styled.div`
  h2 {
    
    padding: 20px 20px 0 20px;
    @media (min-width: 992px){
        padding: 30px 30px 0 30px;
    }
  }
  .iconWrapper {
    padding: 20px;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    gap: 5px;
    @media (min-width: 576px){
        gap: 30px;
    }
    @media (min-width: 992px){
        padding: 30p;
    }
    figure{
        img{
            width: 54px;
            height: 54px;
        }
    }
    .textwrap {
      strong {
        font-size: 18px;
        font-weight:600;
        @media (min-width: 992px){
            font-size: 20px;
        }
      }
      span {
        font-size: 16px;
        font-weight: 400;
        @media (min-width: 992px){
            font-size: 20px;
        }
    
      }
      figure{
        img{
            width: 79px;
            height: 17px;
            margin: 5px 0;
            @media (min-width: 992px){
                margin: 10px 0;
            }
        }
      }
    }
  }
`;
