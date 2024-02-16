import React from 'react';
import AboutImage from '../../assets/programmer-1.png';
import Resume from '../../assets/Arman_Resume.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-left" data-aos="fade-in">
          <div className="about-portrait">
            <img src={AboutImage} alt="About Img" />
          </div>
          <a href={Resume} download className="btn primary">
            Resume <HiDownload />
          </a>
        </div>
        <div className="about-right" data-aos="fade-up">
          <h2>About Me</h2>
          <div className="about-cards">
            {data.map((item) => (
              <Card key={item.id} className="about-card">
                <span className="about-card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hello, I am a web developer with a Bachelor Degree in Engineering. I
            have successfully completed online learning courses and obtained a
            professional certificate in Computer Science for Web Programming
            from Harvard University. I work with HTML, CSS, Bootstrap,
            JavaScript, React, Next.js, MySQL, Sequelize, Node.js, Express.js,
            GraphQL, MERN, Python, Django, Flask & SQL.
          </p>
          <p>
            Facing challenges and trying to solve them while learning new skills
            is my passion. After learning these languages, I have implemented
            them into many of my projects, some of which can be found below.
            Currently excited to explore career opportunities within web
            development and expand my web development knowledge. Feel free to
            review my projects.
          </p>
          <a href={Resume} download className="btn primary">
            Resume <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
