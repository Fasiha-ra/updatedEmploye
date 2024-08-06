import React from 'react'
import { IssuesWrap } from './Issues.styles'
import {SupportIssue} from '../../Constant/Data';
const Issues = ({click = () => {}}) => {
  return (
    <IssuesWrap>
        <h4>What issue are you having ?</h4>
        <div className="cardHolder">
            {SupportIssue.map((value,index)=>(
                <div className="card" key={index} onClick={()=>click()}>
                <img src={value.img} alt="support" />
                <h4>{value.title}</h4>
                <p>{value.para}</p>
            </div>
            ))}
            
        </div>
    </IssuesWrap>
  )
}

export default Issues