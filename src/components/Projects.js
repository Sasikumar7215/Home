import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'Project 1',
      description: 'A brief description of your first project.',
      link: 'https://github.com/yourgithub/project1'
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
