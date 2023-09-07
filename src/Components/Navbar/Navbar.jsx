import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Muhammad Mutahir</div>
        <span> </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="services"
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Serivces</li>
            </Link>

            <Link
              style={{ cursor: "pointer" }}
              spy={true}
              to="experience"
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Experience</li>
            </Link>

            <li>Protfolio</li>
            <li>Progress</li>

            <button className="button n-button">Contact</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
