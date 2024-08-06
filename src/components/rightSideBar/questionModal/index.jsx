import React from "react";
import { QuestionWrapper } from "./QuestionModal.styles";

const QuestionModal = ({question,setQuestion}) => {
  return (
    <QuestionWrapper>
      <input type="text" placeholder="Ask a question (required)" 
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      />
      <div className="line"></div>
      <textarea placeholder="Add more details" className="textareaWrap" 
      
      />
    </QuestionWrapper>
  );
};

export default QuestionModal;
