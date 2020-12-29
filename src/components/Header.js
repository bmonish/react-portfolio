import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <li>
          <a class="header__links" href="#work">
            Work
          </a>
        </li>
        <li>
          <a class="header__links" href="#about">
            About
          </a>
        </li>
        <li>
          <a class="header__links" href="#resume">
            Resume
          </a>
        </li>
      </nav>
    </div>
  );
}

export default Header;
