import React, { useState, useContext } from "react";
import MenuContext from "../context/MenuContext";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import x from "../assets/x.png";
import "../stylesheets/NavBar.css";

const NavBar = () => {
  const {isOpen, toggleMenu, hideMenu} = useContext(MenuContext);

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
        {/* <NavLink to="/playground">Playground</NavLink> */}
      </ul>
    </nav>
  );
};

export default NavBar;
