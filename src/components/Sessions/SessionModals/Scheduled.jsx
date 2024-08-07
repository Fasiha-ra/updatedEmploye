import React from "react";
import { ModalsWrap } from "./Modals.styles";
import back from "../../../assets/sessions/back.png";
import calendar from "../../../assets/sessions/calendar.png";
import time from "../../../assets/sessions/time.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
const Scheduled = ({name, setOpen, selectedDate, selectedTime,selectedEndTime, user }) => {
    const navigate = useNavigate();
console.log(name);
  const handleDone = () => {
    
    navigate("/calendar", { state: { name, selectedDate, selectedTime, selectedEndTime } }); 
  };
  return (
    <ModalsWrap>
      <div className="backicon" onClick={() => setOpen(false)}>
        <img src={back} alt="back" />
      </div>

      <div className="schedule">
        <div className="heading">
          <h2>Session Scheduled</h2>
          <p>Session is added to calander</p>
        </div>
        <div className="wrapper">
          <span>Group Session : Infosys Group</span><br/>
          <strong>Change Management : Leading Agile Systems Change</strong>
          <div className="flex">
          <img src={calendar} alt="calendar" />
          {selectedDate.toDateString()}
        </div>
        <div className="flex">
          <img src={time} alt="tme" />
          {selectedTime} - {selectedEndTime}
        </div>
        
        </div>
        <div className="sessionBtn">
            <Button width="208px" onClick={handleDone}>Done</Button>
        </div>
      </div>
    </ModalsWrap>
  );
};

export default Scheduled;
