import React from "react";
import "../Experience/Experience.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import instagram2 from "../../img/instagram2.png";
import Linkedin from "../../img/linkedin2.png";
function Experience() {
  return (
    <div className="Work">
      <div className="s-left awesome w-left">
        <span>Started Working</span>

        <span id="Services">Brands & Clients</span>

        <span className="text">
          {" "}
          Works for All these
          <br />
          Credentialed & Non-Credentialed Marketplace
        </span>
        <button className="button s-button">Hire me </button>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="innerCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="innerCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="innerCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="innerCircle">
            <img src={instagram2} id="spe-instagram2" alt="" />
          </div>
          <div className="innerCircle">
            <img src={Linkedin} id="spe-instagram2" alt="" />
          </div>

          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
