import React from "react";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Experience from "./Experience";

function Main() {
  return (
    <div>
      <Home />
      <About />
      {/* <Experience /> */}
      <Projects />
    </div>
  );
}

export default Main;
