import React, { useState } from "react";
import { CoachingCategoryWrap } from "../CoachingCategory/category.styles";
import { SessionsWrapper } from "./Sessions.styles";
import { IoIosArrowForward } from "react-icons/io";
import imag from "../../../assets/home/schedule/teacher.png";
const Sessions = ({ oneVOneSession }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const value = {
    para: "The saying “an emergency on your part does not constitute an emergency on mine” is such a terrible thing to think. Shouldn’t we try to be, at the very least, empathetic?How about instead, realizing somebody is in trouble and trying to help them get out of situation which is causing them severe mental stress?",
    fullPara:
      "This is a short paragraph that needs to be expanded to show the full content. Here is the full content that is revealed when the paragraph is expanded. It contains more detailed information about the post.",
  };
  return (
    <CoachingCategoryWrap>
      <SessionsWrapper>
        <div className="headingWrapper">
          <h5>Sessions for you</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="sessionCard">
          <div className="card">
            <img src={imag} alt="imag" />
            <h5>“{oneVOneSession?.title}”</h5>
            <span>
              By{" "}
              {oneVOneSession?.coach?.firstName +
                " " +
                oneVOneSession?.coach?.lastName}
            </span>
            <p>
              {isExpanded
                ? oneVOneSession?.about + oneVOneSession?.about
                : `${oneVOneSession?.about?.substring(0, 200)}...`}
              <span onClick={handleToggle}>
                {isExpanded ? "see less" : "see more"}
              </span>
            </p>
          </div>
        </div>
      </SessionsWrapper>
    </CoachingCategoryWrap>
  );
};

export default Sessions;
