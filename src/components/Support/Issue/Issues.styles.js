import styled from "styled-components";
export const IssuesWrap = styled.div`
  .cardHolder {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .card {
      cursor: pointer;
      background-color: var(--white);
      border-radius: 25px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
      img {
        margin: 0 auto 20px;
        width: 60px;
        height: 60px;
      }
      p {
        font-size: 16px;
        line-height: 25px;
        font-weight: 400;
      }
    }
  }
`;
