import React from "react";
import "../INTRO/Intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Floating from "../Floating/Floating.jsx";
import { motion } from "framer-motion";
import MuhammadMutahir from "../../mrimages/MuhammadMutahir.png";
import pic2 from "../../mrimages/pic2.png";
import { type } from "@testing-library/user-event/dist/type";

function Intro() {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Muhammad Mutahir</span>
          <span>
            {"Intro "}
            MERN Stack Developer with high level of experience in web designing
            and development, producting the Quality work .
          </span>
        </div>
        <button className="button i-button">Hire me </button>

        <div className="i-icons">
          <img src={github} alt="GitHub" />
          <img src={linkedin} alt="Linkedin" />
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
      <div className="i-right">
        {" "}
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={pic2} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24% " }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />{" "}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4", left: "68%" }}
        >
          <Floating image={crown} text1={"Web"} text2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <Floating
            image={thumbup}
            text1={"UI,UX design"}
            text2={"certified "}
          />
        </motion.div>
        <div className="blur" style={{ backgroundٖ: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "20vh",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
