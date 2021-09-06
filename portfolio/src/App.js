import React from "react";
import "./sass/App.scss";

import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About";

function App() {
  return(
    <div className="App">
      <Navbar></Navbar>
      <Section></Section>
      <About></About>
    </div>
  )
}

export default App;
