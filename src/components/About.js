import React from "react";
import "../css/About.css";

function About() {
  return (
    <a href="#" name="about">
      <div className="about">
        <div className="about__left">
          <p className="about__accent">About Me</p>
          <h1>I am a Web Developer, based in Chennai</h1>
          <p className="about__para">
            Student by Profession. Developer by Heart &hearts; <br></br>I'm a
            College Graduate aspiring to become a Full-Stack Developer.
          </p>
        </div>
        <div className="about__right">
          <p className="about__accent">Contact</p>
          <h1>Have any query or question?</h1>
          <p className="about__para">Let's Talk</p>
          <h2 className="about__accent email">
            <a href="mailto:monishmonib@gmail.com">{`monishmonib@gmail.com ->`}</a>
          </h2>
        </div>
      </div>
    </a>
  );
}

export default About;
