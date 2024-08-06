import styled from "styled-components";
import arrowNext from "../../../assets/home/trending/nextArrow.png";
import arrowPrev from "../../../assets/home/trending/prevArrow.png";

export const TrendingWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom: 20px;
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
  .card {
    width: 300px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 0 10px;
    @media (min-width: 1440px) {
      width: 100%;
    }
    .imgHolder {
      img {
        @media (max-width: 600px) {
          width: 100%;
        }
        @media (min-width: 1440px) {
          width: 100%;
        }
      }
    }
    h6 {
      margin: 0;
    }

    .textHolder {
      padding: 20px;
    }
    .logoWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px 20px;
      .logo {
        display: flex;
        gap: 10px;
      }
    }
  }
`;
