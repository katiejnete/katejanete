import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalContext from "../context/ModalContext";
import NightModeContext from "../context/NightModeContext";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import x from "../assets/x.png";
import "../stylesheets/NavBar.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  const {isOpen, toggleMenu, hideMenu, isModalOpen} = useContext(ModalContext);
  const {nightMode, setNightMode} = useContext(NightModeContext);
  const handleNightMode = () => setNightMode(!nightMode);

  return (
    <nav className={`navbar ${isModalOpen ? "modal-open" : ""}`}>
      <NavLink onClick={hideMenu} to="/">
        <img className="navbar-logo" src={logo} alt="Kate Janete Logo" />
      </NavLink>

      <div className="navbar-night" onClick={handleNightMode}>
        <FontAwesomeIcon icon={faMoon}/>
      </div>

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
