import React, { useState } from "react";
import "../../stylesheets/ProjectImage.css"

const ProjectImage = ({ src, alt, setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
    setIsModalOpen(true);
    return;
  };
  const closePopup = () => {
    setIsOpen(false);
    setIsModalOpen(false);
    return;
  }

  return (
    <div className="project-image-div">
      <img className="project-image" onClick={openPopup} src={src} alt={alt} />

      {isOpen && (
        <div className="project-image-overlay">
          <div className="project-image-box">
            <button className="project-image-button" onClick={closePopup}>
              &times;
            </button>
            <img
              className={`project-popup-image ${isOpen ? "open" : ""}`}
              src={src}
              alt={alt}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
