import React, { useState, useEffect } from "react";
import { EnrollWrapper } from "./Enroll.styles";
import Button from "../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import date from "../../../assets/home/session/calendar.png";
import time from "../../../assets/home/session/watch.png";
import { Enroll } from "../../Constant/Data";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import { useSearch } from "../../SearchContext/index"; // Import useSearch

const EnrollSession = ({ onViewAll, showAll }) => {
  const navigate = useNavigate();
  const { trendingSessions } = useAuth();
  const { searchTerm } = useSearch(); // Get searchTerm from context
  const [filteredSessions, setFilteredSessions] = useState([]);

  useEffect(() => {
    if (Array.isArray(trendingSessions)) {
      setFilteredSessions(
        trendingSessions.filter(session =>
          session.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredSessions([]);
    }
  }, [searchTerm, trendingSessions]);

  const NextPage = (session) => {
    navigate("/ScheduleMeeting", { state: { session } });
  };

  const toggleCards = () => {
    onViewAll(); // Call the onViewAll function passed from parent to update the state in Home component
  };

  return (
    <EnrollWrapper>
      <div className="heading">
        <strong className="headingWrap">Enroll For Group Sessions</strong>
        {!showAll && (
          <Button width="94px" type="transparent" onClick={toggleCards}>
            View All
            <FaArrowRightLong />
          </Button>
        )}
      </div>
      <div className="cardHolder">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((value, index) => (
            <div className="wrap" key={index}>
              <div className="card" onClick={() => NextPage(value)}>
                <img src={Enroll[0]?.img || ''} alt="Enroll" className="imgWrap" />
                <div className="textWrapper">
                  <h5>{value.title}</h5>
                  <span>
                    {value?.coach?.firstName + " " + value?.coach?.lastName}
                  </span>
                </div>
                <div className="timeHolder">
                  <div className="date">
                    <img src={date} alt="date" />
                    {value?.startDate}
                  </div>
                  <div className="time">
                    <img src={time} alt="time" />
                    {value?.startTime}
                  </div>
                </div>
              </div>
              {showAll && <Button width="194px">Enroll Now</Button>}
            </div>
          ))
        ) : (
          <p>No sessions found matching the search criteria.</p>
        )}
      </div>
    </EnrollWrapper>
  );
};

export default EnrollSession;
