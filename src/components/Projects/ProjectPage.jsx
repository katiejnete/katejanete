import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProjectImage from "./ProjectImage";
import ModalContext from "../../context/ModalContext";
import ProjectsContext from "../../context/ProjectsContext";
import "../../stylesheets/ProjectPage.css";

const ProjectPage = () => {
  const { name } = useParams();
  const { setIsModalOpen } = useContext(ModalContext);
  const { projects } = useContext(ProjectsContext);
  const { images, title, text, techStack, features, links } = projects.filter(
    (project) => project.name === name
  )[0];

  return (
    <div className={"project"}>
      <div className="project-intro">
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="project-images">
          {images.map((image) => (
            <ProjectImage key={image} src={image} alt={image} setIsModalOpen={setIsModalOpen} />
          ))}
        </div>
      </div>

      <div className="project-tech-stack">
        <h2>Tech Stack</h2>
        <ul>
          {techStack.map((techItem) => (
            <li key={techItem}>{techItem}</li>
          ))}
        </ul>
      </div>

      <div className="project-app-features">
        <h2>App Features</h2>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <h2>Links</h2>
        <ul>
          <li>
            <a className="app-link" key={links[0]} href={links[0]}>
              View Live Demo
            </a>
          </li>
          <li>
            <p><em>Note: The GitHub repository is private. Access is available upon request via the invite link. Contact me for access.</em></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
