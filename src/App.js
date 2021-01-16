// import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Specific from "./components/Specific";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Specific />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
