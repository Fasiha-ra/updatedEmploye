import React, { useState } from "react";
import { NotificationWrapper } from "./Notification.styles";
import CoachingCategory from "../Feed/CoachingCategory";
import TrendingSession from "../Feed/TrendingSession";
import GroupSession from "../Feed/GroupSession";
import Sessions from "../Feed/Sessions";
import UpcomingSession from "../Feed/UpcomingSession";
import CoachProfile from "../Feed/CoachProfile";
import Button from "../Button";
import noti from "../../assets/notification/noti.png";
import clock from "../../assets/notification/clock.png";
import closeIcon from "../../assets/notification/close.png";
import warning from "../../assets/notification/warning.png";
import newIcon from "../../assets/notification/new.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { IoPersonCircleOutline } from "react-icons/io5";
const Notification = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [close, setClose] = useState(false);
  const closeHandler = () => {
    setClose(true);
  };
  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };
  return (
    <NotificationWrapper $toggleDropDown={toggleDropdown}>
      <div className="notificationOuter">
        <div className="notiHolder">
          <div className="btnsHolder">
            <Button type="dark">All</Button>
            <Button type="outline">Post</Button>
            <Button type="outline">Sessions</Button>
          </div>
        </div>
        <div className="notiHolder">
          <span className="heading">
            <img src={noti} alt="notification" />
            Today’s Notification
          </span>
          <div className="parentWrap">
            <div className="innerFlex">
              <img src={clock} alt="clock" />
              <div className="textHolder">
                <p>
                  <strong>Last-minute Reminder:</strong> Your session starts in
                  1 hour.
                </p>
                <p>
                  Prepare your questions and join us for an engaging discussion!
                </p>
                <span>10 mints ago</span>
              </div>
            </div>
            <div className="icon" onClick={handleToggleDropdown}>
              <BsThreeDotsVertical />
              <div className="dropdown">
                <Link>View</Link>
                <Link>Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="notiHolder">
          <div className="parentWrap">
            <div className="innerFlex">
              <img src={clock} alt="clock" />
              <div className="textHolder">
                <p>
                  <strong>Reminder:</strong> You have an upcoming session on{" "}
                  <strong>Mental peace and growth</strong>
                  Don't forget to join us for an enriching discussion!
                </p>
                <p>Date: 1 Jan 2024 | Time: 12 :00 pm</p>
                <span>15 mints ago</span>
              </div>
            </div>
            <div className="icon" onClick={handleToggleDropdown}>
              <BsThreeDotsVertical />
              <div className="dropdown">
                <Link>View</Link>
                <Link>Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="notiHolder">
          <div className="parentWrap">
            <div className="innerFlex">
              <img src={clock} alt="clock" />
              <div className="textHolder">
                <p>
                  <strong>Session Details:</strong> Here's a quick reminder of
                  your upcoming session. Topic: Women Empowerment. See you
                  soon!"
                </p>
                <p>Date: 05 April 2024 I Time: 03 :00 pm.</p>
                <span>25 mints ago</span>
              </div>
            </div>
            <div className="icon" onClick={handleToggleDropdown}>
              <BsThreeDotsVertical />
              <div className="dropdown">
                <Link>View</Link>
                <Link>Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="notiHolder">
          <div className="parentWrap">
            <div className="innerFlex">
              <div className="personicon">
                <IoPersonCircleOutline />
              </div>
              <div className="textHolder">
                <p>
                  Coach has rejected request for 1:1 meet on{" "}
                  <strong>01 Jan 2024 12:00 am</strong> on Training Management.{" "}
                  <span>View Reason</span>
                </p>
                <span>30 mints ago</span>
                <br />
                <Button width="128px" onClick={closeHandler}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="notiHolder">
          <div className="parentWrap">
            <div className="innerFlex">
              <img src={clock} alt="clock" />
              <div className="textHolder">
                <p>
                  <strong>Hey there!</strong>
                  <br />
                  We just dropped a new post on
                  <strong>Talent Management</strong>.
                </p>
                <p>
                  Join the conversation, share your thoughts, and let's dive
                  deep together.
                </p>
                <span>35 mints ago</span>
              </div>
            </div>
            <div className="icon" onClick={handleToggleDropdown}>
              <BsThreeDotsVertical />
              <div className="dropdown">
                <Link>View</Link>
                <Link>Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="notiHolder">
          <div className="parentWrap">
            <div className="innerFlex">
              <img src={newIcon} alt="icon" />
              <div className="textHolder">
                <p>
                  <strong>Hey there!</strong>
                  <br />
                  We just dropped a new post on
                  <strong>Talent Management</strong>.
                </p>
                <p>
                  Join the conversation, share your thoughts, and let's dive
                  deep together.
                </p>
                <span>35 mints ago</span>
              </div>
            </div>
            <div className="icon" onClick={handleToggleDropdown}>
              <BsThreeDotsVertical />
              <div className="dropdown">
                <Link>View</Link>
                <Link>Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="notiHolder">
          <div className="parentWrap">
            <div className="innerFlex">
              <img src={newIcon} alt="icon" />
              <div className="textHolder">
                <p>
                  <strong>New Post Alert! </strong>
                  <br />
                  Get ready to explore Personal Development and unlock fresh
                  insights! Check it out now.
                </p>
                <span>45 mints ago</span>
              </div>
            </div>
            <div className="icon" onClick={handleToggleDropdown}>
              <BsThreeDotsVertical />
              <div className="dropdown">
                <Link>View</Link>
                <Link>Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="notiHolder">
          <div className="parentWrap">
            <div className="innerFlex">
              <img src={warning} alt="icon" />
              <div className="textHolder">
                <p>
                  <strong style={{ color: "red" }}>Action Taken: </strong>
                  Following the review of the reported post on{" "}
                  <strong>Women Empowerment,</strong> appropriate action has
                  been taken.
                </p>
                <span>45 mints ago</span>
              </div>
            </div>
            <div className="icon" onClick={handleToggleDropdown}>
              <BsThreeDotsVertical />
              <div className="dropdown">
                <Link>View</Link>
                <Link>Delete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSideBar">
        <div className="coachingCategory">
          <CoachingCategory />
          <CoachProfile />
          <UpcomingSession />
          <Sessions />
          <GroupSession />
          <TrendingSession />
        </div>
      </div>
      {close && (
        <div classNmae="closeModal">
          <Modal width="585px" open={close} setOpen={setClose}>
            <div className="closeWrap">
              <img src={closeIcon} alt="close" />
              <h2>Request Rejected</h2>
              <div className="paraWrap">
              <span>Reason of rejecting request</span>
              <div className="para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            </div>
            
          </Modal>
        </div>
      )}
    </NotificationWrapper>
  );
};

export default Notification;
