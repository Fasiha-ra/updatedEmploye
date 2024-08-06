import React, { useEffect, useState } from "react";
import { SessionsWrapper } from "./Sessions.styles";
import SessionSearchbar from "./SessionSearchbar";
import EnrollSessions from "./EnrollSessions";
import StartedSessions from "./startedSessions";
import Enroll from "./Enroll";
import CoachingProfile from "./CoachSessions";
import TrendingSessions from "./TrendingSessions";
import Innovation from "./Innovation";
import ScheduleMeeting from "./Innovation/ScheduleMeeting";
import axios from "axios";
import { serverDomain } from "../../constant/server-domain";

const Sessions = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);
  const [sessions, setSessions] = useState({});
  const [sessionDetails, setSessionDetails] = useState({});
  const [trendingSessions, setTrendingSessions] = useState([]);
  const [coachingProfiles, setCoachingProfiles] = useState([]);
  const [oneVOneSession, setOneVOneSession] = useState({});
  const sessionClick = (session) => {
    setSessionOpen(true);
    setSessions(session);
  };
  const clickHandler = (val) => {
    setEnrollOpen(true);
    setSessionDetails(val);
  };
  const BackToPage = () => {
    setEnrollOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${serverDomain}/home`);
        console.log(res);
        setTrendingSessions(res.data?.data?.trandingSession);
        setCoachingProfiles(res.data?.data?.coachProfiles);
        setOneVOneSession(res.data?.data?.onevoneSession);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {enrollOpen ? (
        <div>
          <Innovation BackToPage={BackToPage} sessionDetails={sessionDetails} />
        </div>
      ) : sessionOpen ? (
        <ScheduleMeeting newSession={sessions} />
      ) : (
        <SessionsWrapper>
          <SessionSearchbar />
          <EnrollSessions click={sessionClick} />
          <Enroll click={clickHandler} trendingSessions={trendingSessions} />
          <CoachingProfile coachingProfiles={coachingProfiles} />
          <TrendingSessions oneVOneSession={oneVOneSession} />
          <StartedSessions />
        </SessionsWrapper>
      )}
    </>
  );
};

export default Sessions;
