import React from 'react'
import { CoachingCategoryWrap } from '../CoachingCategory/category.styles'
import { UpcomingSessionWrap } from '../UpcomingSession/UpcmingSession.styles'
import { IoIosArrowForward } from "react-icons/io";
import {TrendingSessionData} from "../../Constant/Data"
const TrendingSession = ({trendingSessions}) => {
  return (
    <CoachingCategoryWrap>
      <UpcomingSessionWrap>
        <div className="headingWrapper">
          <h5>Trending Sessions</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="cardHodler">
          {trendingSessions?.map((value, index) => (
            <div className="card" key={index}>
              <img src={TrendingSessionData[0].img} alt="session" />
              <h5>{value.title}</h5>
            </div>
          ))}
        </div>
      </UpcomingSessionWrap>
    </CoachingCategoryWrap>
  )
}

export default TrendingSession