import React from "react";
import "../css/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <h1>Hey I'm</h1>
        <h1>
          <span className="banner__lineOne banner__span">Monish</span>
          <br></br>
          <span className="banner__lineTwo banner__span">Baskar</span>
        </h1>
      </div>
      <div className="banner__right">
        <p className="banner__accent">About Me</p>
        <h1>I am a Web Developer</h1>
        <h1>Based in Chennai</h1>
        <p>
          I love designing and building things.<br></br>Student by Profession.
          Developer by Heart. &hearts;
        </p>
      </div>
    </div>
  );
}

export default Banner;
