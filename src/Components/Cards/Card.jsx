import React from "react";
import CardCss from "../Cards/Card.css";

function Card({ emoji, Heading, Details }) {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{Heading}</span>
      <span>{Details}</span>
      <button className="c-button">Lern More</button>
    </div>
  );
}

export default Card;
