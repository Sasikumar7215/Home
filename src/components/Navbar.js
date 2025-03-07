import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaTools } from 'react-icons/fa';
const Navbar=()=>{
    return(
        <nav className='navbar'>
        <ul>
        <li> <Link to="/Home"><FaHome/>Home</Link></li>
        <li> <Link to="/Projects"><FaProjectDiagram/>Projects</Link></li>
        <li> <Link to="/Skills"><FaTools/>Skills</Link></li>
        <li> <Link to="/About"><FaInfoCircle/>About</Link></li>
        <li> <Link to="/Contact"><FaEnvelope/>Contact</Link></li>
        </ul>
        </nav>
       
        );
}
export default Navbar;