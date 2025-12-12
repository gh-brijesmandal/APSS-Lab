import "../Homepage/Homepage.css";
import React, { useState } from 'react';
// Header Component

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Advanced Plant and Soil Sensing Laboratory</span>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/team" className="nav-link">Team</a>
            <a href="/research" className="nav-link">Research</a>
            <div className="dropdown">
              <button className="nav-link dropdown-btn">Outreach ▾</button>
              <div className="dropdown-menu">
                <a href="/outreach" className="dropdown-item">Overview</a>
                <a href="/outreach/summer-camp" className="dropdown-item">Summer Camp</a>
                <a href="/outreach/programs" className="dropdown-item">Programs</a>
              </div>
            </div>
            {/* <a href="/outreach/summer-camp" className="nav-link">Summer Camp</a> */}
            <a href="/news" className="nav-link">News</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;