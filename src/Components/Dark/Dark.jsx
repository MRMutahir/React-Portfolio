import React, { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const changeBackgroundColor = () => {
    setBackgroundColor("black");
  };

  return (
    <div className="about-skills d-flex flex-column justify-content-sm-center align-middle vh-100">
      <h4 className="my-2 fs-1 text-light text-center fw-bolder">
        Freelancer, Web Developer & Photographer
      </h4>
      <div className="skills-wrappers">{/* Your skills content */}</div>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      <style>
        {`
          body {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </div>
  );
}

export default App;
