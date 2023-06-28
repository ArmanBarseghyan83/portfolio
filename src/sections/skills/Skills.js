import React from "react";
import Card from "../../components/Card";
import data from "./data";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <p>These Languages Where Used To Build The Following Projects</p>
      <div className="container services-container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service-icon">{item.icon}</div>
            <div className="service-details">
              <h4>{item.title}</h4>
              <div>{item.desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
