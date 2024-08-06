import React from 'react'
import { SessionWrap } from './Session.styles'
import stars from '../../../assets/home/session/stars.png';
import date from '../../../assets/home/session/calendar.png';
import time from '../../../assets/home/session/watch.png';
import Button from '../../Button/index';
import {Sessions} from '../../Constant/Data'
const Session = () => {
  return (
    <SessionWrap>
      {Sessions.map((value,index)=>(
        <div className="sessionHolder" key={index}>
           <div className="imgHolder">
            <strong className='headingWrap'>{value.group}</strong>
            <img src={value.imag} alt="imag" />
           </div>
           <div className="textHolder">
            <h3>{value.title}</h3>
            <div className="nameWrapper">
              <div className="icon">
                <img src={value.icon} alt="" />
              </div>
              <div className="textContent">
                <h4 className="name">By:{value.name} </h4>
                <span>{value.talent}</span>
                <img src={stars} alt="stars" />
              </div>
            </div>
            <div className="btnWrapper">
              <div className="timeHolder">
                <div className="date">
                  <img src={date} alt="date" />
                  17 June
                </div>
                <div className="time">
                  <img src={time} alt="time" />
                  9:00 am
                </div>
              </div>
              <Button width="159px" type="outline">Join Session</Button>
            </div>
           </div>
        </div>
      ))}
        
    </SessionWrap>
  )
}

export default Session