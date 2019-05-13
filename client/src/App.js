import React from "react";
import "./App.scss";

import Showcase from "./components/Showcase";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Showcase />
      <div className="container">
        <About />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
