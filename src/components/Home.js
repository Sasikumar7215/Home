import React from "react";
import profilePic from '../images/image.jpg';
const Home = () =>{
    return (
<div className="home"> 
    <div className="container-fluid">
    <div className="row">
  <div className="col-md-8 home-text">
    <h2>Hello</h2>
    <h2>I'm Sasikumar</h2>
    <h2>React JS Developer</h2>
  </div>
  <div className="col-md-4">
    <img src={profilePic} alt="Profile" className="home-profile-pic" />
  </div>
  </div>
    </div>
    </div>
);
}
export default Home