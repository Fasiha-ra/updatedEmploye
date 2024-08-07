import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";
import Innovation from "../Sessions/Innovation";
import { useLocation } from "react-router-dom";
import { format, addDays } from "date-fns";

const Calendar = () => {
  const location = useLocation();
  const { selectedDate, selectedTime, selectedEndTime,name, user } =
    location.state || {};
  const [showInnovation, setShowInnovation] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date()); // State for current date

  const openInnovation = () => {
    setShowInnovation(true);
  };

  const BackToPage = () => {
    setShowInnovation(false);
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 1)); // Move to next day
  };

  const handlePrevious = () => {
    const today = new Date(); // Current date
    if (currentDate <= today) {
      return;
    }
    setCurrentDate((prevDate) => addDays(prevDate, -1)); // Move to previous day
  };

  const formattedDate = format(currentDate, "EEEE, MMMM d yyyy");

  return (
    <>
      {!showInnovation ? (
        <CalendarWrap>
          <h4>
            {formattedDate}
            <FaAngleLeft
              onClick={handlePrevious}
              style={{ cursor: "pointer" }}
            />
            <FaAngleRight onClick={handleNext} style={{ cursor: "pointer" }} />
          </h4>
          <CalendarHeader />
          <TimeSlots
            click={openInnovation}
            selectedDate={new Date(selectedDate)}
            selectedTime={selectedTime}
            selectedEndTime={selectedEndTime}
            name={name}
          />
        </CalendarWrap>
      ) : (
        <Innovation BackToPage={BackToPage} />
      )}
    </>
  );
};

export default Calendar;
