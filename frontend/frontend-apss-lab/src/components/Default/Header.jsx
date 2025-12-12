// import "./styles.css";
import React, { useState } from 'react'; 

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOutreachOpen, setIsOutreachOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Advanced Plant and Soil Sensing Laboratory</span>
            <span className='logo-text-short'>APSS LAB</span>
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
            
            {/* Outreach Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsOutreachOpen(true)}
              onMouseLeave={() => setIsOutreachOpen(false)}
            >
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => setIsOutreachOpen(!isOutreachOpen)}
              >
                <span className='dropdown-main'>Outreach</span>
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className={`dropdown-menu ${isOutreachOpen ? 'dropdown-open' : ''}`}>
                <a href="/summer-camp" className="dropdown-item">Summer Camp</a>
                <a href="/outreach-activities" className="dropdown-item">Other Outreach Activities</a>
              </div>
            </div>

            <a href="/news" className="nav-link">News</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;