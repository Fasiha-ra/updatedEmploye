import React, { useEffect, useState } from "react";
import { ProfileWrapper } from "./Profile.styles";
import RightSideBar from "../rightSideBar";
import Comment from "../rightSideBar/Comment";
import Blog from "../rightSideBar/Blog";
import UpgradeCourse from "../Sidebar/UpgradeCourse";
import Profile from "./Profile";
import Rating from "./Rating";
import About from "./About";
import Skills from "./Skills";
import Analysis from "./Analysis";
import Education from "./Education";
import { Educationdata, Experiencedata } from "../Constant/Data";
import Certificate from "./Certificate";
import Session from "./Certificate/Session";
import { useLocation } from "react-router-dom";
import { serverDomain } from "../../constant/server-domain";
import axios from "axios";
const EmployeeProfile = () => {
  const { id } = useLocation().state;
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${serverDomain}/coach/${id}`);
        console.log(res);
        setData(res.data?.coach);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <ProfileWrapper>
      <div className="proflewrap">
        <Profile data={data && data} />
        <Session />
        <About data={data && data} />
        <Analysis />
        <Skills data={data && data} />
        <Education data={data && data} />
        <Education data={data && data} isEducation={true} />
        <Certificate data={data && data} />
        <Rating />
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
    </ProfileWrapper>
  );
};

export default EmployeeProfile;
