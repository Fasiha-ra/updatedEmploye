import styled from "styled-components";
export const CertiWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  @media (min-width: 400px) {
    max-width: 400px;
  }
  @media (min-width: 500px) {
    max-width: 480px;
  }
  @media (min-width: 576px) {
    max-width: 560px;
  }
  @media (min-width: 600px) {
    max-width: 600px;
  }
  @media (min-width: 670px) {
    max-width: 660px;
  }
  @media (min-width: 768px) {
    max-width: 740px;
  }
  @media (min-width: 992px) {
    max-width: 760px;
  }
  @media (min-width: 1200px) {
    max-width: 717px;
  }
  @media (min-width: 1240px) {
    max-width: 725px;
  }
  @media (min-width: 1300px) {
    max-width: 750px;
  }
  @media (min-width: 1440px) {
    max-width: 800px;
  }
  @media (min-width: 1600px) {
    max-width: 1000px;
  }
  @media (min-width: 1700px) {
    max-width: 1039px;
  }
  .slick-slider {
    width: 100%;

    .slick-list {
      width: 100%;
    }

    .slick-track {
      display: flex;
      padding: 20px 0;
      @media (min-width: 576px) {
        margin: 0 -10px;
      }
    }

    .slick-slide {
      margin: 0 10px;
      display: flex;
      justify-content: center;
    }
  }
  .slick-list {
    padding: 20px;
  }
  .slick-slide {
    width: 345px !important;
  }
  .slick-arrow {
    width: 34px;
    height: 34px;
  }
  .sessonCard {
    padding: 10px;
    background-color: #fff;
    border: 1px solid var(--gray-50);
    width: 350px !important;
    .flex {
      display: flex;
      gap: 20px;
      padding-bottom: 20px;
      img {
        width: 21px;
        height: 21px;
      }
    }
    .btn {
      padding-bottom: 20px;
      button {
        margin: 0 auto;
        display: block;
      }
    }
  }
`;
