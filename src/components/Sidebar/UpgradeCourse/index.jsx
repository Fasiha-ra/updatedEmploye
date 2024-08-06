import React from "react";
import { UpgradeCourseWrap } from "./UpgradCourse.styles";
import Button from "../../Button";
import { FaAngleRight } from "react-icons/fa6";
const UpgradeCourse = () => {
  return (
    <UpgradeCourseWrap>
      <h4>Upgrade yourself with latest course</h4>
      <p>
        With Personal Plan, you get access to 8,000 of our top-rated courses in
        tech, business, and more.
      </p>
      <Button type="transparent">Explore <FaAngleRight /></Button>
    </UpgradeCourseWrap>
  );
};

export default UpgradeCourse;
