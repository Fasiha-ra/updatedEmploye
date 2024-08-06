import React, { useState } from "react";
import { EnrollWrapper } from "../../Sessions/EnrollSessions/EnrollSessions.styles";
import Cards from "../Cards";
import { EnrollForSession } from "../../Constant/Data";
import nextimg from "../../../assets/sessions/next.png";
import previmg from "../../../assets/sessions/prev.png";
const Enroll = ({click,trendingSessions}) => {


  
  return (
    <EnrollWrapper>
      <h4>Enroll for 1:1 Sessions</h4>
      <div className="cardwrap">
        {/* <img src={previmg} alt="prev" /> */}
        <Cards data={trendingSessions} click={click}/>
        {/* <img src={nextimg} alt="next" /> */}
      </div>
    </EnrollWrapper>
  );
};

export default Enroll;
