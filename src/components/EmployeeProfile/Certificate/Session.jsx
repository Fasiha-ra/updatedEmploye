import React from "react";
import { CertiWrapper } from "./Certificate.styles";
import calendar from "../../../assets/sessions/calendar.png";
import time from "../../../assets/sessions/time.png";
import Button from "../../Button";
import { employeeSession } from "../../Constant/Data";
import Slider from "react-slick";
import prev from "../../../assets/profile/prev.png";
import nextt from "../../../assets/profile/next.png";
const Session = () => {
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
        <h2>Session</h2>
        <div className="cardWrap">
          <div className="cardHold">
          <Slider {...settings}>
            {employeeSession.map((val, ind) => (
              <div className="card sessonCard" key={ind}>
                <figure>
                  <img src={val.img} alt="sessionss" />
                </figure>
                <h4>{val.title}</h4>
                <div className="timeWrap">
                  <div className="flex">
                    <img src={calendar} alt="calendar" />
                    <span>{val.date}</span>
                  </div>
                  <div className="flex">
                    <img src={time} alt="calendar" />
                    <span>{val.time}</span>
                  </div>
                </div>
                <div className="btn">
                <Button width="138px">Enroll Now</Button>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </CertiWrapper>
  );
};

export default Session;
