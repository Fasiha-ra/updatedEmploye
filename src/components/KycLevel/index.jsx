import React from "react";
import { StyledKycLevel } from "./KycLevel.styles";

const KycLevel = ({ level , bg }) => {
  return <StyledKycLevel $level={level} $bg={bg}>
  </StyledKycLevel>;
};

export default KycLevel;
