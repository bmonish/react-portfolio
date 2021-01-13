import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      <div className="about__left">
        <p class="about__accent">About Me</p>
        <h1>I am a Web Developer, based in Chennai</h1>
      </div>
      <div className="about__right">
        <p class="about__accent">Contact</p>
        <h1>Have any query or question?</h1>
        <p>Let's Talk</p>
        <h2 class="about__accent">{`monishmonib@gmail.com`}</h2>
      </div>
    </div>
  );
}

export default About;
