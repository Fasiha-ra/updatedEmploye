import styled from "styled-components";
export const ProfileHold = styled.div`
  margin-bottom: 20px;
  .bgImg {
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .logo {
    position: relative;
    z-index: 1;
    margin-top: -82px;
    img {
      cursor: pointer;
      margin-left: 30px;
      width: 180px;
      height: 180px;
      border-radius: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .textxWrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 0 20px 15px;
    @media (min-width: 768px){
        padding-bottom: 30px;
    }
    p,
    span,
    strong {
      font-size: 17px;
      font-weight: 400;
      color: var(--black);
      @media (min-width: 992px){
        font-size: 20px;
      }
    }
    .review{
        img{
            padding-bottom: 10px;
            margin: 0 auto;
        }
    }
  }
  .btn{
    padding: 0 20px;
  }
 
`;
