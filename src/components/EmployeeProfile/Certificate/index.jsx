// Certificate.js
import React from "react";
import Slider from "react-slick";
import { CertiWrapper } from "./Certificate.styles";
import { CertificateData } from "../../Constant/Data";
import prev from "../../../assets/profile/prev.png";
import nextt from "../../../assets/profile/next.png";
import { serverDomain } from "../../../constant/server-domain";

const Certificate = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <img src={nextt} alt="next img" />,
    prevArrow: <img src={prev} alt="prev" />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CertiWrapper>
      <div className="wrapper">
        <h2>Certificate</h2>
        <div className="cardWrap">
          <div className="cardHolder">
            <Slider {...settings}>
              {data?.certificates?.map((val, ind) => (
                <div className="card" key={ind}>
                  <figure>
                    <img
                      src={`${serverDomain}${val.image}`}
                      alt="certificate"
                    />
                  </figure>
                  <h4>{val.title}</h4>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </CertiWrapper>
  );
};

export default Certificate;
