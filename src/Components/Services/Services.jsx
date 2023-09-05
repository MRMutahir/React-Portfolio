import React from "react";
import Card from "../Cards/Card.jsx";
import ServicesCss from "../Services/Services.css";
import mern from "../../mrimages/mern.png";
import figma from "../../mrimages/figam-removebg-preview.png";
import Glasses from "../../img/glasses.png";
import Resume from "../Services/mern stack.pdf_20230904_141453_0000.pdf.pdf";
// console.log(Resume);
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
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
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
        {/* Card 2 */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={figma}
            Heading="Web Design"
            Details="Html, Css , Bootstrap, Figam"
          />
        </div>
        {/* Card 3 */}

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={mern}
            Heading="MERN  Developer "
            Details="MongoDB, Express.js, React, Node.js"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
