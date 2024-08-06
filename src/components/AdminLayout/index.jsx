import React, { useState, useEffect } from "react";
import Header from "../Header/index";
import { MainLayoutSection } from "./adminLayout.styles";
import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar";


const AdminLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(
    window.innerWidth >= 992
  );

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    
    <MainLayoutSection $sidebarVisible={sidebarVisible}>
      <div className="mainHeader">
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <div className="mainSidebarContent">
        <div className="mainSidebar">
          <SideBar/>
        </div>
        <div className="mainContent">
          <Outlet />
        </div>
      </div>
    </MainLayoutSection>
    
  );
};

export default AdminLayout;
