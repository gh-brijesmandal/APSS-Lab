import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [outreachOpen, setOutreachOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOutreach = () => {
    setOutreachOpen(!outreachOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">iPACERS Project</a>
        </div>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a
              href="/"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/about"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              About the Project
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/team"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/research"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Research & Data
            </a>
          </li>
          <li className="navbar-item navbar-dropdown">
            <a
              href="#outreach"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                toggleOutreach();
              }}
            >
              Outreach <span className="dropdown-arrow">▾</span>
            </a>
            <ul className={`dropdown-menu ${outreachOpen ? "active" : ""}`}>
              <li>
                <a
                  href="#summer-camp"
                  onClick={() => {
                    setIsOpen(false);
                    setOutreachOpen(false);
                  }}
                >
                  Summer Camp
                </a>
              </li>
              <li>
                <a
                  href="#other-outreach"
                  onClick={() => {
                    setIsOpen(false);
                    setOutreachOpen(false);
                  }}
                >
                  Other Activities
                </a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a
              href="#news"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              News & Gallery
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/publications"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Publications
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/resources"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/contact"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
