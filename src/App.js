import React, { useContext, useState } from "react";
import SignUp from "./components/Auth";
import { GlobalStyles } from "./components/Global.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OTP from "./components/Auth/OTP";
import UploadProfile from "./components/Auth/UploadProfile";
import AdminLayout from "./components/AdminLayout";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Feed from "./components/Feed";
import MyProfile from "./components/MyProfile";
import SupportSec from "./components/Support";
import Notification from "./components/Notification";
import Sessions from "./components/Sessions";
import Calendar from "./components/Calendar";
import EmployeeProfile from "./components/EmployeeProfile";
import EnrollNow from "./components/Sessions/Innovation/EnrollNow";
import ScheduleMeeting from "./components/Sessions/Innovation/ScheduleMeeting";
import RaiseTicket from "./components/Support/TicketRaised/RaiseTicket";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/signUp" element={<OTP />} />
          <Route path="/UploadProfile" element={<UploadProfile />} />
          <Route path="/UpdateProfile" element={<MyProfile />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/support" element={<SupportSec />} />
            <Route path="/support/raiseTicket" element={<RaiseTicket/>} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/session" element={<Sessions />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<EmployeeProfile />} />
            <Route path="/EnrollNow" element={<EnrollNow />} />
            <Route path="/ScheduleMeeting" element={<ScheduleMeeting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
