import React from "react";
import { AboutWrap } from "./About.styles";

const About = ({data}) => {
  return (
    <AboutWrap>
      <div className="wrapper">
      <h2>About Coach</h2>
      <p>
      {data?.bio}
      </p>
      </div>
    </AboutWrap>
  );
};

export default About;
