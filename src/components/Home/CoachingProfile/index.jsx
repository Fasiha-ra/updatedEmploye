import React, { useState, useEffect } from "react";
import { CoachingWrap } from "./CoachingProfile.styles";
import Button from "../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import stars from "../../../assets/home/session/stars.png";
import { useNavigate } from "react-router-dom";
import { serverDomain } from "../../../constant/server-domain";
import { useSearch } from "../../SearchContext/index";
const CoachingProfile = ({ onViewAll, showAll, coachProfiles }) => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();
  const [visibleCards, setVisibleCards] = useState(
    showAll ? coachProfiles.length : 6
  );
  const [filteredProfiles, setFilteredProfiles] = useState(coachProfiles);

  useEffect(() => {
    setFilteredProfiles(
      coachProfiles.filter((profile) =>
        `${profile.firstName} ${profile.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, coachProfiles]);

  const ProfileOpen = (id) => {
    navigate("/profile", { state: { id } });
  };

  const handleViewAll = () => {
    setVisibleCards(showAll ? 6 : filteredProfiles.length);
    onViewAll();
  };

  return (
    <CoachingWrap>
      <div className="heading">
        <strong className="headingWrap">Coaching Profile</strong>
        {!showAll && (
          <Button width="94px" type="transparent" onClick={handleViewAll}>
            View All <FaArrowRightLong />
          </Button>
        )}
      </div>
      <div className="cardHolder">
        {filteredProfiles.slice(0, visibleCards).map((value, index) => (
          <div
            className="card"
            key={index}
            onClick={() => ProfileOpen(value.id)}
          >
            <div className="logoWrap">
              <div className="imgHolder">
                <img src={`${serverDomain}${value.avatar}`} alt="logo" />
                {/* <img src={value.img} alt="logo" /> */}
              </div>
              <div className="review">
                <img src={stars} alt="stars" />
                <span>50 reviews</span>
              </div>
            </div>
            <div className="textContent">
              <h5>{value.firstName + " " + value.lastName}</h5>
              <span>{value.coachingExperience[0].title}</span>
            </div>
            <div className="sessions">
              <span>Uploaded Sessions: {value.sessions} </span>
              <span>Enrolled Students: {value.uploaded}</span>
            </div>
          </div>
        ))}
      </div>
    </CoachingWrap>
  );
};

export default CoachingProfile;
