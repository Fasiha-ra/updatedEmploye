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
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/signUp" element={<ProtectedRoute element={OTP} />} />
        <Route path="/UploadProfile" element={<ProtectedRoute element={UploadProfile} />} />
        <Route path="/UpdateProfile" element={<ProtectedRoute element={MyProfile} />} />
        
        <Route path="/" element={<AdminLayout />}>
          <Route path="/dashboard" element={<ProtectedRoute element={Home} />} />
          <Route path="/support" element={<ProtectedRoute element={SupportSec} />} />
          <Route path="/support/raiseTicket" element={<ProtectedRoute element={RaiseTicket} />} />
          <Route path="/feed" element={<ProtectedRoute element={Feed} />} />
          <Route path="/session" element={<ProtectedRoute element={Sessions} />} />
          <Route path="/calendar" element={<ProtectedRoute element={Calendar} />} />
          <Route path="/notification" element={<ProtectedRoute element={Notification} />} />
          <Route path="/profile" element={<ProtectedRoute element={EmployeeProfile} />} />
          <Route path="/EnrollNow" element={<ProtectedRoute element={EnrollNow} />} />
          <Route path="/ScheduleMeeting" element={<ProtectedRoute element={ScheduleMeeting} />} />
        </Route>
        
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;