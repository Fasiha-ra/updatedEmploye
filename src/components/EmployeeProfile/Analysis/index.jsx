import React from 'react'
import { AnalysisWrap } from './Analysis.styles'
import liveChat from '../../../assets/profile/liveChat.png';
import video from '../../../assets/profile/video.png';
import people from '../../../assets/profile/people.png';
const Analysis = () => {
  return (
    <AnalysisWrap>
        <div className="wrapper">
            <h2>Session Analysis</h2>
            <div className="analysis">
                <div className="flex">
                    <figure>
                        <img src={video} alt="video" />
                    </figure>
                    <div className="text">
                        <strong>00</strong>
                        <span>Paid Sessions </span>
                    </div>
                </div>
                <div className="flex">
                    <figure>
                        <img src={video} alt="video" />
                    </figure>
                    <div className="text">
                        <strong>00</strong>
                        <span>Free Sessions  </span>
                    </div>
                </div>
                <div className="flex">
                    <figure>
                        <img src={people} alt="video" />
                    </figure>
                    <div className="text">
                        <strong>00</strong>
                        <span>Students Enrolled </span>
                    </div>
                </div>
                <div className="flex">
                    <figure>
                        <img src={liveChat} alt="video" />
                    </figure>
                    <div className="text">
                        <strong>00</strong>
                        <span>1:1 Sessions  </span>
                    </div>
                </div>

            </div>
        </div>
    </AnalysisWrap>
  )
}

export default Analysis