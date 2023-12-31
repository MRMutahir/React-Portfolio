// Footer.js
import React from "react";
import "../Footer/Footer.css"; // Create a CSS file for styling
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons footer">
        <a
          href="https://github.com/MRMutahir"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/MutahirKareem"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-mutahir-38462125a/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://wa.me/+923133978318"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <a href="/" className="icon-link">
          <Link smooth={true} spy={true} to="Navbar" activeClass="activeClass">
            <i className="fas fa-home icon-link"></i>
          </Link>
        </a>
      </div>
      {/* <h1>SALAM</h1> */}
    </footer>
  );
};

export default Footer;
