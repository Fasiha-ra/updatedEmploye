import React from 'react'
import { QuestionWrapper } from './QuestionModal.styles'

const Poll = () => {
  return (
    <QuestionWrapper>
        <input type="text" placeholder='What is your Question?' />
        <div className="answerWrap">
            <span className='icon'>+</span>
            <span>Answer 1</span>
        </div>
        <div className="answerWrap">
            <span className='icon'>+</span>
            <span>Answer 2</span>
        </div>
        <div className="answerWrap">
            <span className='icon'>+</span>
            <span>Answer 3</span>
        </div>
    </QuestionWrapper>
  )
}

export default Poll