import React from "react";
import { CoachingCategoryWrap } from "./category.styles";
import { IoIosArrowForward } from "react-icons/io";
import { FeedCaochingCategory } from "../../Constant/Data";
import { serverDomain } from "../../../constant/server-domain";
const CoachingCategory = ({ coachingCategories }) => {
  return (
    <CoachingCategoryWrap>
      <div className="headingWrapper">
        <h5>Coaching Categories</h5>
        <div className="arrowIcon">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="cardWrap">
        {coachingCategories?.map((value, index) => (
          <div className="card" key={index}>
            <img src={FeedCaochingCategory[0].img} alt="feed coach" />
            <strong>{value.name}</strong>
          </div>
        ))}
      </div>
    </CoachingCategoryWrap>
  );
};

export default CoachingCategory;
