import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./components/NavBar";
import AppRoutes from "./AppRoutes";
import ModalContext from "./context/ModalContext";
import "./stylesheets/App.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const hideMenu = () => setIsOpen(false);

  return (
    <>
      <ModalContext.Provider value={{ isOpen, toggleMenu, hideMenu, setIsModalOpen, isModalOpen }}>
        <NavBar />
        <div className={`app ${(isOpen || isModalOpen) ? "open" : ""}`}>
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
      </ModalContext.Provider>
    </>
  );
}

export default App;
