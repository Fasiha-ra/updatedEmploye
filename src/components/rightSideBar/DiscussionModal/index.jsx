import React, { useState } from "react";
import { ModalHolder } from "./DiscussionModal.styles";
import TextField from "../../TextField/TextField";
import Button from "../../Button/index";
import QuestionModal from "../questionModal";
import Poll from "../questionModal/Poll";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";
import { useAuth } from "../../../Context/AuthContext";

const DiscussionModal = ({ chatOptions, click, modalType,closeModal}) => {
  const {companyId,currentUser} = useAuth();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [userId, setUserId] = useState(currentUser);
  const [type, setType] = useState(modalType);
  const [tags, setTags] = useState("");
  const [answers, setAnswers] = useState(["jh", "tf"]);
  console.log(tags);

  console.log(currentUser);
  console.log(companyId);

  const renderTextArea = () => {
    switch (modalType) {
      case "Discussion":
        return (
          <TextField
            parentClass="textAreaHolder"
            variant="textarea"
            placeholder="Share thoughts, ideas or updates for Discussion"
          />
        );
      case "Question":
        return <QuestionModal question={question} setQuestion={setQuestion} />;
      case "Poll":
        return <Poll />;
      default:
        return null;
    }
  };

  const renderButton = (type, imgSrc, text) => (
    <button className="chatWrap" onClick={() => click(type)}>
      <img src={imgSrc} alt={type} />
      {text}
    </button>
  );

  const handleSubmit = async () => {
    console.log("clicked");
    try {
      if (modalType === "Questions") {
        const response = await axios.post(
          `${serverDomain}/forum`,
          {
            title,
            question,
            userId,
            type,
            tags,
            companyId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
      } else if (modalType === "Poll") {
        const response = await axios.post(
          `${serverDomain}/forum`,
          {
            userId,
            question,
            type,
            tags,
            answers,
            companyId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
      } else {
        const response = await axios.post(
          `${serverDomain}/forum`,
          {
            userId,
            title:question,
            type:"Discussion",
            tags,
            companyId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalHolder>
      <span className="subTitle">{modalType}</span>
      {renderTextArea()}
      <TextField
        parentClass="inputHolder"
        className="input-field"
        type="text"
        placeholder="#Tags"
        value={tags} // Display tags as a comma-separated string
        onChange={(e) => {
         
          setTags(e.target.value);
        }}
      />
      <div className="chatHolder">
        <div className="chat">
          {chatOptions.includes("discussion") &&
            renderButton(
              "discussion",
              require("../../../assets/home/discussion/discussion.png"),
              "Discussion"
            )}
          {chatOptions.includes("question") &&
            renderButton(
              "question",
              require("../../../assets/home/discussion/question.png"),
              "Question"
            )}
          {chatOptions.includes("poll") &&
            renderButton(
              "poll",
              require("../../../assets/home/discussion/poll.png"),
              "Poll"
            )}
        </div>
        <div className="btnHolder" onClick={closeModal}>
          <Button type="dark" onClick={handleSubmit} width="150px">
            Post
          </Button>
        </div>
      </div>
    </ModalHolder>
  );
};

export default DiscussionModal;
