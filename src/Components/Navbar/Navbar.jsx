import React from "react";
import "./Navbar.css";

function Navbra() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Muhammad Mutahir</div>
        <span>toggel</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Serivces</li>
            <li>Experience</li>
            <li>Protfolio</li>
            <li>Testimonial</li>
            <button className="button n-button">Contact</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbra;
