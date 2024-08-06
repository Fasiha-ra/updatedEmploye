// OtpInput.js

import React, { useState, useRef } from "react";
import { OtpInputWrapper } from "./Texfield.styles";
const OtpInput = ({ numInputs = 4 }) => {
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const inputRefs = useRef([]);
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
console.log(newOtp);
    setOtp(newOtp);

    // Focus on the next input
    if (value !== "" && index < numInputs - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // Focus on the previous input on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <OtpInputWrapper>
      {otp.map((value, index) => (
        <input
          placeholder="-"
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(input) => (inputRefs.current[index] = input)}
        />
      ))}
    </OtpInputWrapper>
  );
};

export default OtpInput;
