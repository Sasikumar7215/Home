/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
         
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" element={<Home/>} />
           <Route path="/skills" element={<Skills />} />
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
