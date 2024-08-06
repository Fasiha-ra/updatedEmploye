import React from "react";
import Footer from "../Footer";
import UpgradeCourse from "./UpgradeCourse";
import { SidebarWrapper } from "./Sidebar.styles";
import Profile from "./Profile";

const SideBar = () => {
  return (
    <SidebarWrapper>
      <div className="profile">
        <Profile />
      </div>
      <div className="course">
        <UpgradeCourse />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </SidebarWrapper>
  );
};

export default SideBar;
