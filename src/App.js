import "./App.css";
import Navbra from "../src/Components/Navbar/Navbar";
import Intro from "./Components/INTRO/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <>
      <div className="App">
        <Navbra />
        <Intro />
        <Services />
        <Experience />
      </div>
    </>
  );
}

export default App;
