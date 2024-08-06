import React from "react";
import { RatingWrap } from "./Rating.styles";
import Ratingicon from "../../../assets/blog/blogLogo.png";
import stars from "../../../assets/sessions/stars.png";
import { RatingData } from "../../Constant/Data";
const Rating = () => {
  return (
    <RatingWrap>
      <div className="wrapper">
        <h2>Ratings & Reviews (20)</h2>
        {RatingData.map((val, ind) => (
          <div className="iconWrapper" key={ind}>
            <figure>
              <img src={val.img} alt="icon" />
            </figure>
            <div className="textwrap">
              <strong>{val.title}</strong>
              <figure>
                <img src={stars} alt="stars" />
              </figure>
              <span>{val.para}</span>
            </div>
          </div>
        ))}
      </div>
    </RatingWrap>
  );
};

export default Rating;
