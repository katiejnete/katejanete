import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../stylesheets/NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src={logo} alt="Kate Vong Logo" />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/experience">Relevant Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* <NavLink to="/playground">Playground</NavLink> */}
        </nav>
    );
};

export default NavBar;