import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import x from "../assets/x.png";
import "../stylesheets/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const hideMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <NavLink onClick={hideMenu} to="/">
        <img className="navbar-logo" src={logo} alt="Kate Janete Logo" />
      </NavLink>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <img src={isOpen ? x : hamburger} alt="hamburger menu toggle" />
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink onClick={hideMenu} to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink onClick={hideMenu} to="/experience">Relevant Experience</NavLink>
        </li>
        <li>
          <NavLink onClick={hideMenu} to="/projects">Projects</NavLink>{" "}
        </li>
        <li>
          <NavLink onClick={hideMenu} to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink onClick={hideMenu} to="/contact">Contact</NavLink>
        </li>
        {/* <NavLink to="/playground">Playground</NavLink> */}
      </ul>
    </nav>
  );
};

export default NavBar;
