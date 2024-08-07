import React, { useState } from "react";
import { InnovationWrap } from "./innovation.styles";
import img1 from "../../../assets/sessions/enroll-1.png";
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
const ChangeManagement = ({ BackToPage, sessionDetails }) => {
  const [dateTime, setDateTime] = useState(false);
  const [session, setSession] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick = async () => {
    setDateTime(true);
  };
  const handleTimeSelect = (date, startTime, EndTime) => {
    setSelectedDate(date);
    setSelectedStartTime(startTime);
    setSelectedEndTime(EndTime);
    setDateTime(false);
    setSession(true);
  };

  // const scheduledHandler = async () => {
  //   try {
  //     const res = await axios.post(`${serverDomain}/session/sessionBooking`, {
  //       userId: 1,
  //       sessionId: 1,
  //       corporateEmail: "contact@alhn.dev",
  //       phone: "9399369854",
  //       selectedTopic: ".....",
  //       date: "2024-06-20",
  //       fromTime: "09:30",
  //       endTime: "21:30",
  //       note: "",
  //     });
  //     console.log(res.data);

  //     setSession(false);
  //     setSchedle(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const scheduledHandler = () => {
    setSession(false);
    setSchedule(true);
  };
  return (
    <InnovationWrap>
      <div className="backimg" onClick={BackToPage}>
        <img src={backicon} alt="" />
      </div>
      <div className="lecture">
        <div className="sessionDetail">
          <div className="textHolder">
            <h2>{sessionDetails?.title}</h2>
            <div className="auhtorDetail">
              <figure>
                <img src={author} alt="author" />
              </figure>
              <div className="name">
                <h5>
                  By :{" "}
                  {sessionDetails?.coach?.firstName +
                    " " +
                    sessionDetails?.coach?.lastName}
                </h5>
                <span>
                  {sessionDetails?.coach?.coachingExperience[0]?.title}
                </span>
                <img src={stars} alt="stars" />
              </div>
            </div>
            <div className="date flex">
              <figure>
                <img src={date} alt="date" />
              </figure>
              <span>
                {sessionDetails?.startDate} - {sessionDetails?.endDate}
              </span>
            </div>
            <div className="time flex">
              <figure>
                <img src={time} alt="time" />
              </figure>
              <span>
                {sessionDetails?.startTime} - {sessionDetails?.endTime}
              </span>
            </div>
            <div className="session flex">
              <figure>
                <img src={sessionicon} alt="session" />
              </figure>
              <span>1 : 1 Session</span>
            </div>
            <Button width="150px" onClick={handleClick}>
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
            {/* Change is now and forever. It is not optional any more than
            breathing and sleeping and doing it well is a requirement of
            organization health. Learning to capture the competitive advantage
            of a changing landscape is an essential skill for leaders. */}
            <br />
            {sessionDetails?.about}
          </p>
        </div>
        <div className="accordion">
          <h5>Topics</h5>
          <Accordions items={sessionDetails?.topics} />
        </div>
      </div>
      {dateTime && (
        <Modal open={dateTime} setOpen={setDateTime} width="1200px">
          <DateTime setOpen={setDateTime} onSelectTime={handleTimeSelect} />
        </Modal>
      )}
      {session && (
        <Modal open={session} setOpen={setSession} width="1200px">
          <Session
            setOpen={setSession}
            selectedDate={selectedDate}
            selectedTime={selectedStartTime}
            selectedEndTime={selectedEndTime}
            click={scheduledHandler}
          />
        </Modal>
      )}
      {schedule && (
        <Modal open={schedule} setOpen={setSchedule} width="1200px">
          <Scheduled
            setOpen={setSchedule}
            selectedDate={selectedDate}
            selectedTime={selectedStartTime}
            selectedEndTime={selectedEndTime}
            name={
              sessionDetails?.coach?.firstName +
              " " +
              sessionDetails?.coach?.lastName
            }
          />
        </Modal>
      )}
    </InnovationWrap>
  );
};

export default ChangeManagement;
