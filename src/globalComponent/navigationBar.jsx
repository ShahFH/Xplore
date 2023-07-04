import "../componentStyles/globalComponents/navigation.css";
import logo from "../images/navigationImages/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__navigation">
        <span className="header__navigation__left">
          <img src={logo} alt="Xplore Logo" />
          <h3>Xplore</h3>
        </span>
        <span
          className={`header__navigation__right ${isMenuOpen ? "open" : ""}`}
        >
          <AnchorLink
            className="header__naviagation__right__link"
            href="#About"
          >
            About Us
          </AnchorLink>
          <AnchorLink
            className="header__naviagation__right__link"
            href="#why-choose-us"
          >
            Why Choose Us
          </AnchorLink>
          <AnchorLink
            className="header__naviagation__right__link"
            href="#get-in-touch"
          >
            Contact Us
          </AnchorLink>
          <AnchorLink className="header__naviagation__right__link" href="#">
            <button>Login</button>
          </AnchorLink>
        </span>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
}
