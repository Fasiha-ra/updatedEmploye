import React, { useEffect, useState } from "react";
import { enrollSeesion } from "../../Constant/Data";
import Cards from "../Cards";
import { EnrollWrapper } from "./EnrollSessions.styles";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";
const EnrollSessions = ({ click }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${serverDomain}/home`);
        console.log(res);
        const newSession = res.data?.data?.groupSession;
        setSessions([{...newSession}].flat());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <EnrollWrapper>
      <h4>Enroll for Group Sessions</h4>
      <div className="cardwrap">
        {/* <img src={previmg} alt="prev" /> */}
        <Cards data={sessions && sessions} click={click} />
        {/* <img src={nextimg} alt="next" /> */}
      </div>
    </EnrollWrapper>
  );
};

export default EnrollSessions;
