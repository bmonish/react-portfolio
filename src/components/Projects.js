import React from "react";
import "../css/Projects.css";

function Projects() {
  return (
    <a href="" name="projects">
      <div className="projects">
        <h1 className="projects__header">PROJECTS</h1>
        <div className="projects__showcase">
          <div className="grid">
            <div className="grid__item">
              <div className="card">
                <img
                  className="card__img"
                  src="https://i.pinimg.com/originals/ac/4b/25/ac4b257a8ca1ab25d5f6b171045eb448.jpg"
                  alt="Snowy Mountains"
                />
                <div className="card__content">
                  <h1 className="card__header">Pomodoro Timer</h1>
                  <p className="card__text">
                    A simple dark themed Pomodoro Timer! Built using HTML, CSS,
                    JS
                  </p>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="card">
                <img
                  className="card__img"
                  src="https://i.pinimg.com/originals/10/9b/c2/109bc289dfc090bd64a782bb05e5f763.jpg"
                  alt="Snowy Mountains"
                />
                <div className="card__content">
                  <h1 className="card__header">SRM Pediatric Survey</h1>
                  <p className="card__text">
                    A Survey website for SRM Dental College, Ramapuram.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="card">
                <img
                  className="card__img"
                  src="https://i.pinimg.com/originals/6e/6f/ab/6e6fabd44a036064fdd8cac6110b1c0d.jpg"
                  alt="Snowy Mountains"
                />
                <div className="card__content">
                  <h1 className="card__header">Amazon Clone</h1>
                  <p className="card__text">
                    Built using React, Firebase. With Cloud functions hosted in
                    heroku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Projects;
