import axios from "axios";
import React, { useEffect, useState } from "react";
import { serverDomain } from "../../../constant/server-domain";
import { EnrollWrapper } from "../../Sessions/EnrollSessions/EnrollSessions.styles";
import Cards from "../Cards";
import { useAuth } from "../../../Context/AuthContext";
const StartedSessions = () => {
  const [bookedSessions, setBookedSessions] = useState([]);
  const { currentUser: user } = useAuth();

  console.log("bookedSessions",bookedSessions);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${serverDomain}/sessionBooking/${user}/myBookings`
        );
        console.log(res);
        setBookedSessions(res.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <EnrollWrapper>
      <h4>My Booked Sessions</h4>
      <div className="cardwrap">
        {/* <img src={previmg} alt="prev" /> */}
        <Cards data={bookedSessions} bookedSession={true} />

        {/* <img src={nextimg} alt="next" /> */}
      </div>
    </EnrollWrapper>
  );
};

export default StartedSessions;
