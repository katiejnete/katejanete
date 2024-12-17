import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import "../stylesheets/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <img className="navbar-logo" src={logo} alt="Kate Vong Logo" />

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <img src={hamburger} alt="" />
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Relevant Experience</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* <NavLink to="/playground">Playground</NavLink> */}
      </ul>
    </nav>
  );
};

export default NavBar;
