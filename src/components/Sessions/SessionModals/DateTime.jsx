import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ModalsWrap, StyledButton } from "./Modals.styles";
import Button from "../../Button";
import calendar from "../../../assets/sessions/calendar.png";
import back from "../../../assets/sessions/back.png";

// Utility function to format time
const formatTime = (hours, minutes) => {
  const period = hours >= 12 ? 'pm' : 'am';
  const hour12 = hours % 12 || 12;
  return `${hour12}:${minutes} ${period}`;
};

const TimeSlot = [
  {
    startTime: { hours: 7, minutes: 15 },
    endTime: { hours: 8, minutes: 15 },
    bgClr: "var(--gray-50)",
    disable: true,
  },
  {
    startTime: { hours: 8, minutes: 15 },
    endTime: { hours: 9, minutes: 15 },
  },
  {
    startTime: { hours: 9, minutes: 15 },
    endTime: { hours: 10, minutes: 15 },
  },
  {
    startTime: { hours: 10, minutes: 15 },
    endTime: { hours: 11, minutes: 15 },
  },
  {
    startTime: { hours: 11, minutes: 15 },
    endTime: { hours: 12, minutes: 15 },
    bgClr: "var(--gray-50)",
    disable: true,
  },
  {
    startTime: { hours: 12, minutes: 15 },
    endTime: { hours: 13, minutes: 15 },
  },
  {
    startTime: { hours: 13, minutes: 15 },
    endTime: { hours: 14, minutes: 15 },
  },
  {
    startTime: { hours: 14, minutes: 15 },
    endTime: { hours: 15, minutes: 15 },
    bgClr: "var(--gray-50)",
    disable: true,
  },
  {
    startTime: { hours: 15, minutes: 15 },
    endTime: { hours: 16, minutes: 15 },
  },
  {
    startTime: { hours: 16, minutes: 15 },
    endTime: { hours: 17, minutes: 15 },
  },
  {
    startTime: { hours: 17, minutes: 15 },
    endTime: { hours: 18, minutes: 15 },
  },
  {
    startTime: { hours: 18, minutes: 15 },
    endTime: { hours: 19, minutes: 10 },
  },
];

const DateTime = ({ setOpen, onSelectTime }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <>
      <ModalsWrap>
        <div className="backicon" onClick={() => setOpen(false)}>
          <img src={back} alt="back" />
        </div>
        <h2>Session Date & Time</h2>

        <span>Select Session Date & Time</span>
        <div className="para">
          <p>Change Management: Leading Agile Systems Change</p>
          <Button type="outline" width="237px" onClick={toggleCalendar}>
            {startDate.toDateString()}
            <img src={calendar} alt="calendar" />
          </Button>
          {showCalendar && (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          )}
        </div>
        <div className="timeSlots">
          {TimeSlot.map((val, ind) => (
            <div className="time" key={ind}>
              <StyledButton
                type="outline"
                width="206px"
                bgClr={val.bgClr}
                disabled={val.disable}
                onClick={() => {
                  const startTime = formatTime(val.startTime.hours, val.startTime.minutes);
                  const endTime = formatTime(val.endTime.hours, val.endTime.minutes);
                  console.log('Button Clicked');
                  console.log('Date:', startDate);
                  console.log('Start Time:', startTime);
                  console.log('End Time:', endTime);
                  onSelectTime(startDate, startTime, endTime);
                }}
              >
                {formatTime(val.startTime.hours, val.startTime.minutes)}-
                {formatTime(val.endTime.hours, val.endTime.minutes)}
              </StyledButton>
            </div>
          ))}
        </div>
      </ModalsWrap>
    </>
  );
};

export default DateTime;
