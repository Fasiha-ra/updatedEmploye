import React from "react";
import { ModalsWrap } from "./Modals.styles";
import back from "../../../assets/sessions/back.png";
import calendar from "../../../assets/sessions/calendar.png";
import time from "../../../assets/sessions/time.png";
import Button from "../../Button";
const Session = ({
  setOpen,
  selectedDate,
  selectedTime,
  selectedEndTime,
  click,
}) => {
  console.log('Selected End Time in Session:', selectedEndTime);
  console.log('Selected Start Time in Session:', selectedTime);
  return (
    <ModalsWrap>
      <div className="backicon" onClick={() => setOpen(false)}>
        <img src={back} alt="back" />
      </div>
      <h2>1:1 Session</h2>
      <div className="textWrap">
        <p>Change Management : Leading Agile Systems Change</p>
        <span>
          <img src={calendar} alt="calendar" />
          {selectedDate.toDateString()}
        </span>
        <span>
          <img src={time} alt="tme" />
          {selectedTime} -{selectedEndTime}
        </span>
      </div>
      <div className="sessionBtn">
        <Button width="232px" onClick={() => click()}>
          Done
        </Button>
      </div>
    </ModalsWrap>
  );
};

export default Session;
