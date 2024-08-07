import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Title, { ManageTitle } from "../Title";
const localizer = momentLocalizer(moment);



const TimeSlots = ({ name ,click, selectedDate, selectedTime, selectedEndTime, user }) => {
  const CustomEvent = ({ event }) => {
    console.log("CustomEvent rendering:", event);
    if (event.title === "Title") {
      return <Title user={name}/>;
    } else if (event.title === "ManageTitle") {
      return <ManageTitle />;
    } else {
      return <span>{event.title}</span>;
    }
  };
  const today = new Date();
  console.log("Start calendar time:", selectedTime);
  console.log("End calendar time:", selectedEndTime);
console.log("user name here :" , name);
  // Parse the selectedTime and selectedEndTime strings
  const parsedSelectedTime = moment(selectedTime, "h:mm a");
  const parsedSelectedEndTime = moment(selectedEndTime, "h:mm a");

  // Create new Date objects with the parsed time values
  const startDateTime = new Date(selectedDate);
  startDateTime.setHours(parsedSelectedTime.hours(), parsedSelectedTime.minutes());

  const endDateTime = new Date(selectedDate);
  endDateTime.setHours(parsedSelectedEndTime.hours(), parsedSelectedEndTime.minutes());

  const events = [
    {
      id: 1,
      title: "Title",
      start: startDateTime,
      end: endDateTime,
    },
    {
      id: 2,
      title: "ManageTitle",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 5, 15),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 15),
    },
  ];

  console.log("Events:", events);

  return (
    <div style={{ height: 800 }}>
      <Calendar
        localizer={localizer}
        events={events}
        views={["day"]}
        defaultView="day"
        defaultDate={new Date()}
        onSelectEvent={click}
        components={{
          event: CustomEvent,
        }}
      />
    </div>
  );
};

export default TimeSlots;
