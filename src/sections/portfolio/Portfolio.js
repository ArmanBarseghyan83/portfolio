import React from "react";
import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  const uniqueCategoires = ["All", ...new Set(categories)];

  const categoryProjectsHandler = (category) => {
    if (category === "All") {
      setProjects(data);
      return;
    }

    setProjects(data.filter((item) => item.category === category));
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>
        Check out some of my projects. Use the buttons to toggle the different
        categories.
      </p>
      <div className="container portfolio-container">
        <ProjectsCategories
          categories={uniqueCategoires}
          onChangeCategories={categoryProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
