import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'Project 1',
      description:"It’s an e-commerce website to buy products from the My-Cart app. I have used a dummy API for integration to display products.",
      Skills:"React.js,Html5,Css3,Javascript,Jsx,Bootstrap,React hooks,Github",
      link: 'https://sasikumar7215.github.io/products/'
    },
    {
      name: 'Project 2',
      description: 'A brief description of your second project.',
      link: 'https://github.com/yourgithub/project2'
    },
    // Add more projects here
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
