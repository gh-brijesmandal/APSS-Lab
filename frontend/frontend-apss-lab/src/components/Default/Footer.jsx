import "./styles.css";

export default function Footer()
{
    return(
<>
<footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logos">
          <img src="/images/mafes.png" alt="MAFES" />
          <img src="/images/nsf.png" alt="NSF" />
          <img src="/images/usda.png" alt="USDA" />
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <h4>Mississippi State University</h4>
          <p>4792 Hardy Road</p>
          <p>250 McCain Hall</p>
          <p>Mississippi State, MS 39762</p>
          <p>P: (662) 325-3270</p>
          <p>E: (662) 325-8873</p>
        </div>

        <div className="footer-links">
          <a href="#">Admissions</a>
          <a href="#">Academics</a>
          <a href="#">Campus Visit</a>
          <a href="#">Research</a>
          <a href="#">Financial Aid</a>
          <a href="#">Libraries</a>
          <a href="#">Emergencies</a>
          <a href="#">IT Status</a>
          <a href="#">Outreach</a>
          <a href="#">Athletics</a>
          <a href="#">Giving</a>
          <a href="#">MSSTATE Jobs</a>
        </div>

        <div className="footer-logo">
          <img src="/images/bagley.png" alt="Bagley College of Engineering" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Customer Service | EEO Statement | Ethics Line | Legal Notices  
          <br />
          © 2025 Mississippi State University. All Rights Reserved.
        </p>

        <p className="footer-small">
          Technical problems, contact the Webmaster |  
          Last modified October 6, 2025  
          <br />
          URL: http://apsslab.abe.msstate.edu/index.php/research/
        </p>
      </div>
    </footer>
        </>
    );
}