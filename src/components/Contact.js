import React, { useState } from "react";
import "../css/Contact.css";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${`monishmonib@gmail.com`}?subject=${`Contact From Website | ${email}`}&body=${name}: ${message}`
    );
  };
  return (
    <React.Fragment>
      <Element id="contact" name="contact">
        <div className="contact">
          <div className="contact__left">
            <p className="contact__header">CONNECT</p>
            <h1>
              Got an Idea?<br></br>Let's Talk
            </h1>
            <h2 className="about__accent email">
              <a href="mailto:monishmonib@gmail.com">{`monishmonib@gmail.com ->`}</a>
            </h2>
            <a
              aria-label="Monish Github"
              href="https://www.github.com/bmonish"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="contact__icons"
                icon={["fab", "github"]}
              />
            </a>
            <a
              aria-label="Monish LinkedIn"
              href="https://www.linkedin.com/in/bmonish"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="contact__icons"
                icon={["fab", "linkedin"]}
              />
            </a>
            <a
              aria-label="Monish Instagram"
              href="https://www.instagram.com/monish.codes/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="contact__icons"
                icon={["fab", "instagram"]}
              />
            </a>
          </div>
          <div className="contact__right">
            <p className="contact__header">
              WANNA ESTIMATE YOUR PROJECT?<br></br>Let me know here
            </p>
            <form name="contactForm">
              <h2>What's your name?</h2>
              <input
                name="userName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h2>What's your email?</h2>
              <input
                name="userEmail"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h2>Tell me about your project?</h2>
              <input
                name="userMessage"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <br></br>
              <button
                className="submit__button"
                onClick={handleClick}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
}

export default Contact;
