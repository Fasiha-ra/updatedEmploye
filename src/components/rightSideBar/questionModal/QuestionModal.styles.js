import styled from "styled-components";
export const QuestionWrapper=styled.div`

    padding:20px 10px;
    border: 1px solid gray;
    border-radius: 10px;
    width: 100%;
    input{
      padding:20px 10px 10px;
      width: 100%;
      &::placeholder{
        padding: 0 20px;
      }
    }
    .line{
      border-bottom: 1px solid #000;
    }
    .textareaWrap{
      outline: none;
      border: none;
      padding: 10px 25px 0;
      height: 100px;
    }
  .answerWrap{
    color: #6D6D6D;
    padding: 20px;
    span{
        padding: 0 10px;
    }
    .icon{
        font-size: 20px;
    }
  }
`;