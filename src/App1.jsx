import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import About from "./About";
import Services from "./Services";
import Tours from "./Tours";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Footer from "./Footer";

const App1 = () => {
  return (
    <div >
      <Navbar />
      <About/>
      <Services/>
      <Tours/>
      <Contact/>
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default App1;
