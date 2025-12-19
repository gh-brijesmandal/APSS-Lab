import "../Homepage/Homepage.css";   // takes css from homepage.css

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">MSU Research Project</h3>
            <p className="footer-text">
              Advancing knowledge through collaborative research and community engagement.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About the Project</a></li>
              <li><a href="/research">Research & Data</a></li>
              <li><a href="/summer-camp">Summer Camp</a></li>
              <li><a href="/publications">Publications</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Connect</h4>
            <ul className="footer-links">
              <li><a href="/news">News & Updates</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/partners">Partners</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Contact</h4>
            <p className="footer-text">
              Mississippi State University<br />
              Department Name<br />
              Starkville, MS 39762<br />
              <a href="mailto:info@msu.edu" className="footer-email">info@msu.edu</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mississippi State University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;