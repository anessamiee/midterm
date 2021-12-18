import React from "react";
import "../styles/Header.css";
import headerLogo from "../img/header-logo.png";
import {
  faTwitter,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Header = () => (
  <div className="header">
    <div className="header-container">
      <Link to="/">
        <img src={headerLogo} alt="ENFOLD portofilo" title="logo" />
      </Link>

      <div className="menu">
        <nav className="pages">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="social">
          <ul>
            <li>
              <a href="/#" className="twitterIco" title="Twitter">
                <FontAwesomeIcon icon={faTwitter} fixedWidth />
              </a>
            </li>
            <li>
              <a href="/#" className="dribbbleIco" title="Dribbble">
                <FontAwesomeIcon icon={faDribbble} fixedWidth />
              </a>
            </li>
            <li>
              <a href="/#" className="instagramIco" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} fixedWidth />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);
export default Header;
