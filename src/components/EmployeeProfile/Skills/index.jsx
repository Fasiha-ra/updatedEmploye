import React from "react";
import { SkillsWrap } from "./Skills.styles";

const Skills = ({ data }) => {
  return (
    <SkillsWrap>
      <div className="wrapper">
        <h2>Skills</h2>
        <div className="skillsHold">
          <div className="flex">
            <h5>Primary</h5>
            <div className="skill">
              {data?.primaryTrainingTopic?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className="flex">
            <h5>Secondary</h5>
            <div className="skill">
              {data?.secondaryTrainingTopic?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SkillsWrap>
  );
};

export default Skills;
