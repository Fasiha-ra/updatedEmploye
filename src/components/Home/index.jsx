import React, { useEffect, useState } from "react";
import CoachingCategory from "./coachingCategory";
import EnrollSession from "./Enroll";
import CoachingProfile from "./CoachingProfile";
import Schedule from "./Schedule";
import Trending from "./Trending";
import { HomeWrap } from "./Home.styles";
import Comment from "../rightSideBar/Comment/index";
import RightSideBar from "../rightSideBar";
import Blog from "../rightSideBar/Blog";
import UpgradeCourse from "../Sidebar/UpgradeCourse";
import axios from "axios";
import { serverDomain } from "../../constant/server-domain";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [coachingCategory, setCoachingCategory] = useState([]);
  const [groupSessions, setGroupSessions] = useState({});
  const [coachProfiles, setCoachProfiles] = useState([]);
  const [oneVOneSessions, setOneVOneSessions] = useState({});

  const {setTrendingSessions,trendingSessions} = useAuth();
  console.log("trendingSessions", trendingSessions);
  const handleViewAll = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${serverDomain}/home`);
        setGroupSessions(response.data?.data?.groupSession);
        // console.log("group", response.data?.data?.groupSession);

        setCoachProfiles(response.data?.data?.coachProfiles);
        setTrendingSessions(response.data?.data?.trandingSession);
        setCoachingCategory(response.data?.data?.coachCategories);
        setOneVOneSessions(response.data?.data?.onevoneSession);
        console.log("response", response);

      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      {activeSection === null ? (
        <HomeWrap>
          <div className="home">
            <div className="discussion">
              <Comment />
            </div>
            <CoachingCategory coachingCategory={coachingCategory} />
            <EnrollSession
              onViewAll={() => handleViewAll("enroll")}
              showAll={false}
          
            />
            <CoachingProfile
              onViewAll={() => handleViewAll("coaching")}
              showAll={false}
              coachProfiles={coachProfiles}
            />
            <Schedule oneVOneSessions={oneVOneSessions} />
            <Trending />
          </div>
          <div className="rightSideBar">
            <RightSideBar>
              <div className="comment">
                <Comment />
              </div>
              <div className="blog">
                <Blog />
              </div>
              <div className="course">
                <UpgradeCourse />
              </div>
            </RightSideBar>
          </div>
        </HomeWrap>
      ) : activeSection === "enroll" ? (
        <EnrollSession
          onViewAll={() => handleViewAll("enroll")}
          showAll={true}
          trendingSessions={trendingSessions}
        />
      ) : activeSection === "coaching" ? (
        <CoachingProfile
          onViewAll={() => handleViewAll("coaching")}
          showAll={true}
        />
      ) : null}
    </>
  );
};

export default Home;
