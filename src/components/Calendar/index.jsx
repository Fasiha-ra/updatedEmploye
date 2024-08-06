import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";
import Innovation from "../Sessions/Innovation";
import { useLocation } from "react-router-dom";
const Calendar = () => {
  const location = useLocation();
  const { selectedDate, selectedTime,selectedEndTime, user } = location.state || {};
  const [showInnovation, setShowInnovation] = useState(false);

  const openInnovation = () => {
    setShowInnovation(true);
  };
  const BackToPage = () => {
    setShowInnovation(false);
  };
  return (
    <>
      {!showInnovation ? (
        <CalendarWrap>
          <h4>
            Tuesday, November 30 2024 <FaAngleLeft />
            <FaAngleRight />
          </h4>
          <CalendarHeader />
          <TimeSlots
            click={openInnovation}
            selectedDate={new Date(selectedDate)}
            selectedTime={selectedTime}
            selectedEndTime={selectedEndTime}
          />
        </CalendarWrap>
      ) : (
        <Innovation BackToPage={BackToPage} />
      )}
    </>
  );
};

export default Calendar;
