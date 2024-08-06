import React, { useState, useEffect } from "react";
import { TrendingWrap } from "./Trending.styles";
import stars from "../../../assets/home/session/stars.png";
import { TrendingData } from "../../Constant/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrowImg from "../../../assets/home/trending/nextArrow.png"; // Path to your right arrow image
import prevArrowImg from "../../../assets/home/trending/prevArrow.png"; // Path to your left arrow image
import { useAuth } from "../../../Context/AuthContext";
import { useSearch } from "../../SearchContext/index"; // Import useSearch

const Trending = () => {
  const { searchTerm } = useSearch(); // Get searchTerm from context
  const { trendingSessions } = useAuth();
  
  // Initialize filteredSessions with empty array
  const [filteredSessions, setFilteredSessions] = useState([]);

  useEffect(() => {
    if (trendingSessions) {
      setFilteredSessions(
        trendingSessions.filter(session =>
          session.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, trendingSessions]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1622,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <TrendingWrap>
      <div className="container">
        <strong className="headingWrap">Trending Sessions</strong>
        <Slider {...settings}>
          {filteredSessions.length > 0 ? (
            filteredSessions.map((value, index) => (
              <div className="card" key={index}>
                <div className="imgHolder">
                  <img src={TrendingData[index]?.img || ''} alt="img" />
                </div>
                <div className="textHolder">
                  <h6>{value.title}</h6>
                  <p>{value.about}</p>
                </div>
                <div className="logoWrap">
                  <div className="logo">
                    <img src={TrendingData[index]?.logo || ''} alt="logo" />
                    <div className="logoText">
                      <h6>{value.coach.firstName + " " + value.coach.lastName}</h6>
                      <span>{TrendingData[index]?.type || ''}</span>
                    </div>
                  </div>
                  <div className="rating">
                    <span>Teach Student: {TrendingData[index]?.len || 0}</span>
                    <img src={stars} alt="stars" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No sessions available.</p>
          )}
        </Slider>
      </div>
    </TrendingWrap>
  );
};

export default Trending;
