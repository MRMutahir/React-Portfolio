import React from "react";
import Card from "../Cards/Card.jsx";
import ServicesCss from "../Services/Services.css";
import mern from "../../mrimages/mern.png";
import figma from "../../mrimages/figam-removebg-preview.png";
import Glasses from "../../img/glasses.png";
function Services() {
  return (
    <div className="Services">
      <div className="s-left awesome">
        <span>My Awesome</span>

        <span id="Services">Services</span>

        <span className="text">
          {" "}
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>

        <button className="button s-button">Download CV</button>
      </div>
      <div className="s-right cards">
        {/* Card 1 */}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={Glasses}
            Heading="Web Design"
            Details="Html, Css , Bootstrap, Figam"
          />
        </div>
        {/* Card2 */}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={figma}
            Heading="Web Design"
            Details="Html, Css , Bootstrap, Figam"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
