import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalContext from "../context/ModalContext";
import NightModeContext from "../context/NightModeContext";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logoNight from "../assets/logo-night.png";
import "../stylesheets/NavBar.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { isMenuOpen, toggleMenu, hideMenu, isModalOpen } =
    useContext(ModalContext);
  const { nightMode, setNightMode } = useContext(NightModeContext);
  const handleNightMode = () => setNightMode(!nightMode);

  return (
    <nav className={`navbar ${isModalOpen ? "modal-open" : ""} ${nightMode ? "night" : ""}`}>
      <NavLink onClick={hideMenu} to="/">
        <img className="navbar-logo" src={nightMode ? logoNight : logo} alt="Kate Janete Logo" />
      </NavLink>

      <div className="navbar-moon" onClick={handleNightMode}>
        <FontAwesomeIcon icon={faMoon} />
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/>} 
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink onClick={hideMenu} to="/about">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideMenu} to="/experience">
            Relevant Experience
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideMenu} to="/projects">
            Projects
          </NavLink>{" "}
        </li>
        {/* <NavLink to="/playground">Playground</NavLink> */}
      </ul>
    </nav>
  );
};

export default NavBar;
