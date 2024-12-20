import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./components/NavBar";
import AppRoutes from "./AppRoutes";
import MenuContext from "./context/MenuContext";
import "./stylesheets/App.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const hideMenu = () => setIsOpen(false);

  return (
    <>
      <MenuContext.Provider value={{ isOpen, toggleMenu, hideMenu }}>
        <NavBar />
        <div className={isOpen ? "menu-open" : ""}>
          <main>
            <AppRoutes />
          </main>
          <footer>
            <p className="footer-text">
              Built with React ⋅ © 2024 Kate Janete. All Rights Reserved.
            </p>
            <div className="app-social-icons">
              <a
                href="https://www.linkedin.com/in/katejanete"
                target="_blank"
                className="app-social-icon"
              >
                <FontAwesomeIcon
                  className="app-icon-large"
                  icon={faLinkedin}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="mailto:katiejnete@gmail.com"
                target="_blank"
                className="app-social-icon"
              >
                <FontAwesomeIcon
                  className="app-icon-large"
                  icon={faEnvelope}
                  alt="E-mail"
                />
              </a>
            </div>
          </footer>
        </div>
      </MenuContext.Provider>
    </>
  );
}

export default App;
