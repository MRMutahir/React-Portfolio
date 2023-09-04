import "./App.css";
import Navbra from "../src/Components/Navbar/Navbar.jsx";
import Intro from "./Components/INTRO/Intro";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <div className="App">
        <Navbra />
        <Intro />
        <Services/>
      </div>
    </>
  );
}

export default App;
