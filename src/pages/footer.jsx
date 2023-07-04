import React from "react";
import {
  FaInfoCircle,
  FaBook,
  FaLock,
  FaMobileAlt,
  FaFacebook
} from "react-icons/fa";
import classes from "../../src/pageStyles/footer.css";
import logo from "../images/navigationImages/Logo.png";
import Instagram from "../images/footerImg/Instagram.png";
import Meta from "../images/footerImg/Meta.png";
import Twitter from "../images/footerImg/Twitter.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          {/* Add your About Us content here */}
        </div>
        <div className="footer-section">
          <h4>Terms and Conditions</h4>
          {/* Add your Terms and Conditions content here */}
        </div>
        <div className="footer-section">
          <h4>Privacy Policy</h4>
          {/* Add your Privacy Policy content here */}
        </div>
        <div className="footer-section">
          <h4>Get The App</h4>
          {/* Add your Get The App content here */}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo-section">
          <img src={logo} alt="Xplore Logo" />
        </div>
        <div className="social-icons">
          <img src={Meta} alt="instagram logo" />
          <img src={Instagram} alt="instagram logo" />
          <img src={Twitter} alt="instagram logo" />
        </div>
        <p>&copy; 2023 Prifina LLC All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
