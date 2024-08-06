import React from "react";
import { EdcuationWrap } from "./Education.styles";
import educationimg from "../../../assets/profile/education.png";
const Education = ({ data, isEducation = false }) => {
  return (
    <EdcuationWrap>
      <div className="wrapper">
        {isEducation
          ? data?.educationDetails?.map((val, ind) => (
              <div key={ind}>
                <h2>{val?.maintitle}</h2>
                <div className="flex">
                  <figure>
                    <img src={educationimg} alt="education" />
                  </figure>
                  <div className="text">
                    <h4>{val?.specialization}</h4>
                    <p>{val?.description}</p>
                    <span>grade:{val?.grade}</span>
                    <br />
                    <span>{val?.yearsOfExperience?.split("To").join(" | ")}</span>
                    <br />
                    <span>{val?.address}</span>
                  </div>
                </div>
              </div>
            ))
          : data?.coachingExperience?.map((val, ind) => (
              <div key={ind}>
                <h2>{val?.maintitle}</h2>
                <div className="flex">
                  <figure>
                    <img src={educationimg} alt="education" />
                  </figure>
                  <div className="text">
                    <h4>{val.title}</h4>
                    <p>{val?.description}</p>
                    <span>{val?.grade}</span>
                    <br />
                    <span>{val.yearsOfExperience?.split("To").join(" | ")}</span>
                    <br />
                    <span>{val?.address}</span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </EdcuationWrap>
  );
};

export default Education;
