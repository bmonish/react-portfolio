import React from "react";
import "../css/Header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <h3>Monish B</h3>
        <div>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={200}
            className="header__links"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={200}
            className="header__links"
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1hLZbxZ5XpsrZXZ59uYeATjnbqFn6CtDC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={200}
            className="header__links"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
