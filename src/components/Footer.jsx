import {
  faDribbble,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="social">
        <ul>
          <li>
            <a href="/#" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} fixedWidth />
            </a>
          </li>
          <li>
            <a href="/#" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} fixedWidth />
            </a>
          </li>
          <li>
            <a href="/#" title="Dribble">
              <FontAwesomeIcon icon={faDribbble} fixedWidth />
            </a>
          </li>
          <li>
            <a href="/#" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} fixedWidth />
            </a>
          </li>
          <li>
            <a href="/#" title="Linkedin">
              <FontAwesomeIcon icon={faLinkedin} fixedWidth />
            </a>
          </li>
          <li>
            <a href="/#" title="Mail">
              <FontAwesomeIcon icon={faEnvelope} fixedWidth />
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <section className="first-text-block">
        <h2>Subscribe</h2>
        <p>Get our latest news, tips and tricks</p>
      </section>
      <div className="email">
        <input type="email" id="email" name="email" placeholder="E-Mail*" />
        <input type="submit" id="submit" />
      </div>
      <div className="second-text-block">
        <ul>
          <li>
            <a href="/">About</a>|
          </li>
          <li>
            <a href="/">Imprint</a>|
          </li>
          <li>
            <a href="/">Contact</a>|
          </li>
          <li>
            <a href="/">Privacy Pilocy</a>
          </li>
        </ul>
      </div>
      <div className="third-text-block">
        <a href="#">© 2018 Enfold by Kriesi</a>
      </div>
    </div>
  </div>
);
export default Footer;
