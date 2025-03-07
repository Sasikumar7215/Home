/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  
  return (
    
    <div className="App">
     
      <Router>
        <Navbar />
        
        <div className="container">
          <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
           <Route path="/skills" element={<Skills />} />
           <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
