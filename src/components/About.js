
import React from 'react';
import profilePic from '../images/profile.png';

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <p>Hello! I'm Sasikumar, a passionate web developer with experience in building dynamic and responsive websites. I specialize in frontend technologies like React, JavaScript, and CSS, and I'm constantly learning new skills to improve my craft.</p>
      <h2>Experience</h2>
      <p><li>Having 4 years of work experience in developing the responsive website as per current market.</li>	
       <li>Worked on React, HTML5, CSS3, Bootstrap, Javascript,Axios,Fetch, jira, Postman, and GitHub,gitLab and knowledge on Oracle Database, SQL.</li>
       <li>Development of custom web sites, both static and multimedia presentations, includingNavigation and look & feel. </li>
     </p>
     <h2>Professional Experience</h2>
     <li>Worked in Unique Hire Consulting LLP to Infosys from April 2022 to January 2025.</li>
      <li>Worked in Nielsen Sports India Private Limited from November 2020 to April 2022.</li>
      <h2>Technical Skills</h2>
        <li>Markup Language      : HTML, HTML5, XML.</li>
        <li>Script		         : JavaScript, ES6.</li>
        <li>Frame work		     : Bootstrap5.</li>
        <li>Cascading 		     : CSS, CSS3.</li>
        <li>Library	             : React js.</li> 
        <li>Tools                : Visual Studio Code, Notepad++.</li>
       <li> Additional Tool	     : JIRA, GitHub, GitLab,GitHubDesktop,GitHubCopilot, beyond compare,
       Postman.</li>
      
    </section>
  );
}

export default About;
