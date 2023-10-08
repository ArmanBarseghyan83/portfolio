import React from "react";
import { useEffect } from "react";
import HeaderImage from "../../assets/portrait2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header id="header">
      <div className="header-back"></div>
      <div className="container header-container" data-aos="fade-in">
        <div className="header-profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <div className="header-content">
          <p>Hello, I'm</p>
          <h2>Arman Barseghyan</h2>
          <p>Web Developer</p>
        </div>
        <div className="header-cta">
          <a href="#contact" className="btn primary">
            Contact Me
          </a>
          <a href="#projects" className="btn light">
            My Work
          </a>
          <a
            href="https://github.com/ArmanBarseghyan83/portfolio.git"
            id="github-logo"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
