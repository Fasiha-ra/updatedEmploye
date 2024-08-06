import React from "react";
import { CoachingWrap } from "./Coach.styles";
import stars from "../../../assets/home/session/stars.png";
// import { coachingProfile } from "../../Constant/Data";
import { useNavigate } from "react-router-dom";
import { serverDomain } from "../../../constant/server-domain";
const CoachingProfile = ({ coachingProfiles }) => {

  console.log(coachingProfiles)
  const navigate = useNavigate();
  const ProfileOpen = (id) => {
    navigate("/profile", { state: { id } });
  };
  return (
    <CoachingWrap>
      <h4 className="headingWrap">Coach Profiles</h4>
      <div className="cardHolder">
        {coachingProfiles?.map((value, index) => (
          <div className="card" key={index} onClick={() => ProfileOpen(value.id)}>
            <div className="logoWrap">
              <div className="imgHolder">
                <img src={`${serverDomain}${value.avatar}`} alt="logo" />
              </div>
              <div className="review">
                <img src={stars} alt="stars" />
                <span>50 reviews</span>
              </div>
            </div>
            <div className="textContent">
              <h5>{value.firstName + " " + value.lastName}</h5>
              <span>{value.type}</span>
            </div>
            <div className="sessions">
              <span>Uploaded Sessions: {value.sessions} </span>
              <span>Enrolled Students: : {value.uploaded}</span>
            </div>
          </div>
        ))}
      </div>
    </CoachingWrap>
  );
};

export default CoachingProfile;
