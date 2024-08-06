import React, { useState } from "react";
import { SessionPopup } from "./EnrollSessionPopup.styles";
import TextField from "../../TextField/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import time from "../../../assets/sessions/time.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";
import { useAuth } from "../../../Context/AuthContext";

const EnrollSessionPopup = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const {currentUser} = useAuth()
  const [formData, setFormData] = useState({
    userId: currentUser,
    sessionId: "1",
    corporateEmail: "contact@alhn.dev",
    phone: "9399369854",
    selectedTopic: "",
    date: "",
    fromTime: "09:30",
    endTime: "21:30",
    note: ""
  });
 

  const navigate = useNavigate();

  const clickHandler = async () => {
    console.log('formData:', formData);
    try {
      const response = await axios.post(`${serverDomain}/sessionBooking`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('response:', response);
      navigate("/calendar");
    } catch (e) {
      console.log('Error:', e.response ? e.response.data : e.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData((prev) => ({ ...prev, date: date.toISOString().split('T')[0] })); // Use ISO string date format
  };

  return (
    <SessionPopup>
      <div className="textWrap">
        <div className="titleHolder">
          <strong className="tite">Enroll for session</strong>
        </div>
        <p>
          We appreciate your interest in our upcoming session and would like to
          provide you with a comprehensive form to enroll for the event. Kindly
          follow the steps below to complete the form & secure your spot
        </p>
      </div>
      <div className="titleHolder">
        <strong className="tite">Personal Information</strong>
      </div>
      <div className="flex">
        <TextField
          parentClass="emailWrapper"
          className="input-field"
          field_Name="email"
          type="email"
          placeholder="Corporate Email ID"
          name="corporateEmail"
          value={formData.corporateEmail}
          onChange={handleChange}
          bgClr="rgba(255, 255, 255, 0.37)"
        />
        <TextField
          parentClass="emailWrapper"
          className="input-field"
          field_Name="number"
          type="number"
          placeholder="Contact Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          bgClr="rgba(255, 255, 255, 0.37)"
        />
      </div>
      <div className="titleHolder">
        <strong className="tite">Select the session you wish to attend</strong>
      </div>
      <div className="flex">
        <TextField
          parentClass="emailWrapper"
          className="input-field"
          label="Topic"
          field_Name="text"
          type="text"
          placeholder="Enter topic name"
          name="selectedTopic"
          value={formData.selectedTopic}
          onChange={handleChange}
          bgClr="rgba(255, 255, 255, 0.37)"
        />
        <label htmlFor="" className="dateLabel">
          Date
          <div className="date-picker">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
            />
          </div>
        </label>
      </div>
      <div className="timerHolder">
        <span>Time</span>
        <div className="timeWrap">
          <div className="time">
            <input
              type="text"
              placeholder="From"
              name="fromTime"
              value={formData.fromTime}
              onChange={handleChange}
            />
            <img src={time} alt="time" />
          </div>
          <div className="time">
            <input
              type="text"
              placeholder="To"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
            <img src={time} alt="time" />
          </div>
        </div>
      </div>
      <TextField
        parentClass="emailWrapper"
        variant="textarea"
        className="input-field"
        field_Name="number"
        label="Note/Description"
        type="text"
        name="note"
        value={formData.note}
        onChange={handleChange}
        bgClr="rgba(255, 255, 255, 0.37)"
      />
      <div className="btn">
        <Button width="124px" onClick={clickHandler}>Save</Button>
      </div>
    </SessionPopup>
  );
};

export default EnrollSessionPopup;
