import React from "react";
import "../../Components/Floating/Floating.css";
function Floating({ image, text1, text2 }) {
  return (
    <div className="floatingDiv">
      <img src={image} alt="" />
      <span>
        {text1} <br />
        {text2}
      </span>
    </div>
  );
}

export default Floating;
