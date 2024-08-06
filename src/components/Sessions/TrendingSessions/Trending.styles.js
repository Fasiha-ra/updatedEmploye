import styled from "styled-components";
export const TrendingWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
  .cardDetail {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 1200px) {
      justify-content: space-between;
      flex-direction: row;
    }
    img {
      width: 500px;
      margin: 0 auto;
      @media (min-width: 1440px) {
        width: 622px;
      }
    }
    .textHolder {
        margin: 0 auto;
      width: 100%;
      max-width: 500px;
      .btnHolder {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;

        img {
          width: 84px;
          height: 20px;
        }
      }
    }
  }
`;
