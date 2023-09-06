import React from "react";
import Card from "../Cards/Card.jsx";
import ServicesCss from "../Services/Services.css";
import mern from "../../mrimages/mern.png";
import figma from "../../mrimages/figam-removebg-preview.png";
import Glasses from "../../img/glasses.png";
import Resume from "../Services/mern stack.pdf_20230904_141453_0000.pdf.pdf";
import { motion } from "framer-motion";
// console.log(Resume);
function Services() {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

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
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={Glasses}
            Heading="Web Design"
            Details="Html, Css , Bootstrap, Figam"
          />
        </motion.div>
        {/* Card 2 */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={figma}
            Heading="Web Design"
            Details="Html, Css , Bootstrap, Figam"
          />
        </motion.div>
        {/* Card 3 */}

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={mern}
            Heading="MERN  Developer "
            Details="MongoDB, Express.js, React, Node.js"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
