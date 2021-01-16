import React from "react";
import "../css/Specific.css";

function Specific() {
  return (
    <div className="specific">
      <h1 className="specific__header">SPECIALIZING IN</h1>
      <div className="categories__wrapper">
        <div className="categories">
          <h1 className="category__header">
            Front-End<br></br>Development
          </h1>
          <p className="category__desc">
            I'm currently focusing on React.js and CSS Preprocessors.
          </p>
        </div>
        <div className="categories">
          <h1 className="category__header">
            UI/UX<br></br>Design
          </h1>
          <p className="category__desc">
            I have always loved designing UI. Now I'm eagerly getting into the
            nitty-gritty part of it.
          </p>
        </div>
        <div className="categories">
          <h1 className="category__header">
            Content<br></br>Creating
          </h1>
          <p className="category__desc">
            This is one of my non-technical strengths and I plan to put this
            skill to use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specific;
