import React from "react";
import { TitleWrap } from "./Title.styles";
import people from "../../../assets/calendar/proples.png";
import person from "../../../assets/calendar/person.png";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Title = ({user}) => {
  return (
    <TitleWrap>
      <span>Change Management: Leading Agile Systems Change...</span>
      <span>
        <img src={people} alt="people" />
        {user}
      </span>
      <span>
        <FaPencilAlt />
        <div className="preview">
          <FaEye />
        </div>
      </span>
    </TitleWrap>
  );
};

export default Title;

export const ManageTitle = () => {
  return (
    <TitleWrap>
      <span>Change Management: Leading Agile Systems Change...</span>
      <span>
        <img src={person} alt="person" />
        Anish Mehra, Junior Engineer
      </span>
      <span>
        <FaPencilAlt />
        <FaEye />
      </span>
    </TitleWrap>
  );
};