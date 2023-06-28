import React from "react";
import Logo from "../../assets/logo-2.png";
import data from "./data";
import { MdLightMode } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import "./navbar.css";

function Navbar({ onThemeHandler, theme }) {
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav-menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme-icon" onClick={onThemeHandler}>
          {theme ? <MdLightMode /> : <IoIosMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
