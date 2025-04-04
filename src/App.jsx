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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const hideMenu = () => setIsMenuOpen(false);

  return (
    <>
      <ModalContext.Provider
        value={{
          isMenuOpen,
          toggleMenu,
          hideMenu,
          setIsModalOpen,
          isModalOpen,
        }}
      >
        <NavBar />
        <div className={`app ${isMenuOpen || isModalOpen ? "open" : ""}`}>
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
                rel="noopener noreferrer"
                className="app-social-icon"
              >
                <FontAwesomeIcon
                  className="app-icon-large"
                  icon={faLinkedin}
                  aria-label="LinkedIn"
                />
              </a>
              <a
                href="mailto:katiejnete@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="app-social-icon"
              >
                <FontAwesomeIcon
                  className="app-icon-large"
                  icon={faEnvelope}
                  aria-label="E-mail"
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
