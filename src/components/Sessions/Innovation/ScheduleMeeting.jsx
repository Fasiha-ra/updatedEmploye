import React, { useState } from "react";
import { InnovationWrap } from "./innovation.styles";
import img1 from "../../../assets/sessions/schedule-1.png";
import author from "../../../assets/sessions/author.png";
import stars from "../../../assets/sessions/stars.png";
import date from "../../../assets/sessions/calendar.png";
import time from "../../../assets/sessions/time.png";
import sessionicon from "../../../assets/sessions/session.png";
import Button from "../../Button";
import Accordions from "../../Accordions";
import { items } from "../../Constant/Data";
import Modal from "../../Modal";
import Calendar from "../SessionModals/DateTime";
import DateTime from "../SessionModals/DateTime";
import Session from "../SessionModals/Session";
import Scheduled from "../SessionModals/Scheduled";
import axios from "axios";
import backicon from "../../../assets/sessions/back.png";
import { serverDomain } from "../../../constant/server-domain";
import { useLocation, useNavigate } from "react-router-dom";
import EnrollSessionPopup from "./EnrollSessionPopup";
const ScheduleMeeting = ({ newSession }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const session = useLocation()?.state?.session || newSession;
  console.log("session", session);

  const PopupOpen = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();
  const BackToPage = () => {
    navigate("/dashboard");
  };
  //  const handleClick = () =>{
  //   setIsModalOpen(true)

  //  }
  return (
    <InnovationWrap>
      <div className="backimg" onClick={BackToPage}>
        <img src={backicon} alt="" />
      </div>
      <div className="lecture">
        <div className="sessionDetail">
          <div className="textHolder">
            <h2>{session?.title}</h2>
            <div className="auhtorDetail">
              <figure>
                <img src={author} alt="author" />
              </figure>
              <div className="name">
                <h5>
                  By :{" "}
                  {session?.coach?.firstName + " " + session?.coach?.lastName}
                </h5>
                <span>{session.coach.coachingExperience[0].title}</span>
                <img src={stars} alt="stars" />
              </div>
            </div>
            <div className="date flex">
              <figure>
                <img src={date} alt="date" />
              </figure>
              <span>
                {session?.startDate} - {session?.endDate}
              </span>
            </div>
            <div className="time flex">
              <figure>
                <img src={time} alt="time" />
              </figure>
              <span>
                {session?.startTime} - {session?.endTime}
              </span>
            </div>
            <div className="session flex">
              <figure>
                <img src={sessionicon} alt="session" />
              </figure>
              <span>1 : 1 Session</span>
            </div>
            <Button width="150px" onClick={PopupOpen}>
              Enroll Now
            </Button>
          </div>
          <figure className="thumb">
            <img src={img1} alt="img1" />
          </figure>
        </div>
        <div className="sessionPara">
          <h5>About Session</h5>
          <p>
            {session?.about}
            <br />
          </p>
        </div>
        <div className="accordion">
          <h5>Topics</h5>
          <Accordions items={session?.topics} />
        </div>
      </div>
      {setIsModalOpen && (
        <Modal open={isModalOpen} setOpen={setIsModalOpen} width="961px">
          <EnrollSessionPopup />
        </Modal>
      )}
    </InnovationWrap>
  );
};

export default ScheduleMeeting;
