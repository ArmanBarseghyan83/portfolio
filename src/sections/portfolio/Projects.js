import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="portfolio-projects" data-aos="fade-up">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
