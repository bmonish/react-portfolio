import React from "react";
import "../css/Header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={200}
          className="header__links"
        >
          About
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
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={200}
          className="header__links"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Header;
