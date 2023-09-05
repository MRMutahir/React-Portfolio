import "./App.css";
import Navbra from "../src/Components/Navbar/Navbar";
import Intro from "./Components/INTRO/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import RecentProject from "./Components/RecentProject/RecentProject";

function App() {
  return (
    <>
      <div className="App">
        <Navbra />
        <Intro />
        <Services />
        <Experience />
        <RecentProject />
      </div>
    </>
  );
}

export default App;
