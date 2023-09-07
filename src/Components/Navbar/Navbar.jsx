import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Muhammad Mutahir</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            {/* Link to the "Navbar" section */}
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            {/* Link to the "services" section */}
            <Link
              spy={true}
              to="services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>

            {/* Link to the "Experience" section */}
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>

            {/* Link to the "recentProject" section */}
            <Link
              spy={true}
              to="recentProject"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Project</li>
            </Link>

            {/* Link to the "ProgressBar" section */}
            <Link
              spy={true}
              to="ProgressBar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Progress</li>
            </Link>

            {/* Link to the "Contact" section */}
            <Link
              spy={true}
              to="Contact"
              smooth={true}
              activeClass="activeClass"
            >
              {/* Inside this link, there's a button for "Contact" */}
              <li>
                <button className="button n-button">Contact</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
