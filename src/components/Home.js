import React from "react";
import profilePic from '../images/image.jpg';
const Home = () =>{
    return (
<div className="home"> 
    <div> 
    <h2>Hello</h2>
    <h2>I'm Sasikumar</h2>
    <h2>React Js developer</h2>
    </div>
  
    <img src={profilePic} alt="Profile" className="home-profile-pic"></img>
    </div>
);
}
export default Home