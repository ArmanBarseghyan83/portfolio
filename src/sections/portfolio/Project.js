import React from "react";
import Card from "../../components/Card";
import { BsGithub } from "react-icons/bs";

const Project = ({ project }) => {
  return (
    <Card className="portfolio-project">
      <div className="portfolio-project-image">
        <img src={project.image} alt="Portfolio Project Img" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio-project-cta">
        <a
          href={project.demo}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Demo
        </a>
        <a href={project.github} id="github-logo">
          <BsGithub />
        </a>
      </div>
    </Card>
  );
};

export default Project;
