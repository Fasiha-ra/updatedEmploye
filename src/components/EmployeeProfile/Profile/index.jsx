import React, { useState } from "react";
import { ProfileHold } from "./Profile.styles";
import BG from "../../../assets/profile/background.png";
import Logo from "../../../assets/profile/logo.png";
import stars from "../../../assets/sessions/stars.png";
import Button from "../../Button";
import { serverDomain } from "../../../constant/server-domain";

const Profile = ({ data }) => {
  // const [bgImage, setBgImage] = useState(`${serverDomain}${data?.cover}`);
  // const [logoImage, setLogoImage] = useState(`${serverDomain}${data?.avatar}`);

  console.log(data);

  const { coachingExperience, cover, avatar } = data;
  return (
    <ProfileHold>
      <div
        className="bgImg"
        // onClick={() => document.getElementById("bgImageInput").click()}
      >
        <img src={`${serverDomain}${cover}`} alt="Profile background" />
        {/* <input
          type="file"
          id="bgImageInput"
          style={{ display: "none" }}
          onChange={handleBgImageChange}
          accept=".jpg, .jpeg, .png" // Accept jpg, jpeg, and png formats
        /> */}
      </div>
      <div
        className="logo"
        // onClick={() => document.getElementById("logoInput").click()}
      >
        <figure>
          <img src={`${serverDomain}${avatar}`} alt="Profile logo" />
          {/* <input
            type="file"
            id="logoInput"
            style={{ display: "none" }}
            onChange={handleLogoImageChange}
            accept=".jpg, .jpeg, .png" // Accept jpg, jpeg, and png formats
          /> */}
        </figure>
      </div>
      <div className="textxWrap">
        <div className="text">
          <h2>{data?.firstName + " " + data?.lastName}</h2>
          <p>{coachingExperience && coachingExperience[0].title}</p>
          <strong>
            {coachingExperience && coachingExperience[0]?.title} |{" "}
            {coachingExperience && coachingExperience[1]?.title}
          </strong>
        </div>
        <div className="review">
          <figure>
            <img src={stars} alt="stars" />
          </figure>
          <span>20+ Reviews</span>
        </div>
      </div>
      <div className="btn">
        <Button width="208px">Schedule</Button>
      </div>
    </ProfileHold>
  );
};

export default Profile;
