import React from "react";
import { TrendingWrap } from "./Trending.styles";
import enroll9 from "../../../assets/sessions/enroll9.png";
import stars from '../../../assets/sessions/stars.png'
import Button from "../../Button";
const TrendingSessions = ({oneVOneSession}) => {
  return (
    <TrendingWrap>
      <h4>Trending Sessions</h4>
      <div className="cardDetail">
        <figure>
          <img src={enroll9} alt="enroll" />
        </figure>
        <div className="textHolder">
          <h5>
           {oneVOneSession?.title}
          </h5>
          <p>
          {oneVOneSession?.about}
            <span>see more</span>
            <div className="btnHolder">
                <div className="author">
                <span>By {oneVOneSession?.coach?.firstName + " " + oneVOneSession?.coach?.lastName} </span>
                <figure>
                    <img src={stars} alt="stars" />
                </figure>
                </div>
                <Button width="189px">Schedule 1:1 Session</Button>
            </div>
          </p>
        </div>
      </div>
    </TrendingWrap>
  );
};

export default TrendingSessions;
