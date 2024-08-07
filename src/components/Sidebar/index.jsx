import React from "react";
import Footer from "../Footer";
import UpgradeCourse from "./UpgradeCourse";
import { SidebarWrapper } from "./Sidebar.styles";
import Profile from "./Profile";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    navigate("/");
  };
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
      <div className="signoutBtn" onClick={handleSignOut}>
        <Button>Sign Out</Button>
      </div>
    </SidebarWrapper>
  );
};

export default SideBar;
