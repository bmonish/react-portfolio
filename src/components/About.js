import React from "react";
import "../css/About.css";
import { Element } from "react-scroll";

function About() {
  return (
    <React.Fragment>
      <Element id="about" name="about">
        <div className="about">
          <h1 className="about__header">ABOUT ME</h1>
          <h1>I am a Web Developer, based in Chennai</h1>
          <h3 className="about__text">
            Student by Profession. Developer by Heart &hearts;
          </h3>
        </div>
      </Element>
    </React.Fragment>
  );
}

export default About;
