import React from 'react'
import { CoachingCategoryWrap } from '../CoachingCategory/category.styles'
import { GroupSessionWrap } from './GroupSession.styles'
import { IoIosArrowForward } from "react-icons/io";
import {GroupSessionData} from "../../Constant/Data";
import clock from "../../../assets/home/session/watch.png";
import calendar from "../../../assets/home/session/calendar.png";
const GroupSession = ({groupSessions}) => {
  return (
    <CoachingCategoryWrap>
        <GroupSessionWrap>
        <div className="headingWrapper">
          <h5>Group Sessions</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
          </div>
          {groupSessions?.map((value,index)=>(
            <div className="groupHolder" key={index}>
            <h5>{value.title} <span>{value.coach.firstName + " " + value.coach.lastName}</span></h5>
            <div className="timeWrap">
                <div className="time">
                    <img src={clock} alt="time" />
                    <span>{value.startTime}</span>
                </div>
                <div className="date">
                    <img src={calendar} alt="calendar" />
                    <span>{value.startDate}</span>
                </div>
            </div>
          </div>
          ))}
          
        </GroupSessionWrap>
    </CoachingCategoryWrap>
  )
}

export default GroupSession