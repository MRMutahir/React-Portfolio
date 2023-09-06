import "./App.css";
import Navbra from "../src/Components/Navbar/Navbar";
import Intro from "./Components/INTRO/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import RecentProject from "./Components/RecentProject/RecentProject";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Toggle from "./Components/Toggle/Toggle";

function App() {
  return (
    <>
      <div className="App">
        <Navbra />
        <Intro />
        <Services />
        <Experience />
        <RecentProject />
        <ProgressBar />
        <Contact />
        <Footer />
       
      </div>
    </>
  );
}

export default App;
