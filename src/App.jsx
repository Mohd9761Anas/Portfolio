import Nav from "./components/nav";
import "./App.css";
import Intro from "./components/intro";
import About from "./components/about";
import Project from "./components/projects";
import Skill from "./components/skill";
import Contact from "./components/contact";
import Footer from "./components/footer";
import React, { useRef} from "react";
function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const homeRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const skillRef = useRef(null);

  const scrollToSkill = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const projectRef = useRef(null);

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Nav
        scrollToContact={scrollToContact}
        scrollToSkill={scrollToSkill}
        scrollToHome={scrollToHome}
        scrollToProject={scrollToProject}
        scrollToAbout={scrollToAbout}
      />
      <Intro ref={homeRef}/>
      <About ref={aboutRef}/>
      <Project ref={projectRef}/>
      <Skill ref={skillRef}/>
      <Contact ref={contactRef}/>
      <Footer />
    </div>
  );
}

export default App;
