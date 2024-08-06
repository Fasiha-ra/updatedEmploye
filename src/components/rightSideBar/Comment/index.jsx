import React, { useState } from "react";
import { DiscussionWrap } from "./Comment.styles";
import discussionIcon from "../../../assets/home/discussion/discussion.png";
import questionIcon from "../../../assets/home/discussion/question.png";
import pollIcon from "../../../assets/home/discussion/poll.png";
import Modal from "../../Modal";
import DiscussionModal from "../DiscussionModal";

const Comment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState([]);
  const [modalType, setModalType]=useState("");
  
  const discussHandler = () => {
    setIsModalOpen(true);
    setModalType("Discussion");
    setModalOptions(['question', 'poll']);
  };

  const questionHandler = () => {
    setIsModalOpen(true);
    setModalType("Question");
    setModalOptions(['discussion', 'poll']);
  };

  const pollHandler = () => {
    setIsModalOpen(true);
    setModalType("Poll");
    setModalOptions(['discussion', 'question']);
  };
const closeModal = () => {
  setIsModalOpen(false)
}
  const handleClick = (type) => {
    setIsModalOpen(true);
    if (type === 'discussion') {
      setModalType("Discussion");
      setModalOptions(['question', 'poll']);
    } else if (type === 'question') {
      setModalType("Question");
      setModalOptions(['discussion', 'poll']);
    } else if (type === 'poll') {
      setModalType("Poll");
      setModalOptions(['discussion', 'question']);
    }
    setIsModalOpen(false);
    setTimeout(() => setIsModalOpen(true), 0);
  };

  return (
    <DiscussionWrap>
      <input type="text" placeholder="Write what’s in your mind ?" />
      <div className="questionWrap">
        <button className="questionSec" onClick={discussHandler}>
          <img src={discussionIcon} alt="discussion" />
          Discussion
        </button>
        <button className="questionSec" onClick={questionHandler}>
          <img src={questionIcon} alt="question" />
          Question
        </button>
        <button className="questionSec" onClick={pollHandler}>
          <img src={pollIcon} alt="poll" />
          Poll
        </button>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} setOpen={setIsModalOpen} width="961px">
          <DiscussionModal chatOptions={modalOptions} click={handleClick} modalType={modalType} closeModal={closeModal}/>
        </Modal>
      )}
    </DiscussionWrap>
  );
};

export default Comment;
