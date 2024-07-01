import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Website for a driving school developped with html, php and css',
      link: 'https://github.com/ton-compte/projet1'
    },
    {
      title: 'Project 2 (in progress)',
      description: 'Djikstra shortest path algorithm',
      link: 'https://github.com/ton-compte/projet2'
    }
  ];

  return (
    <div>
      <h1>My projects</h1>
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
