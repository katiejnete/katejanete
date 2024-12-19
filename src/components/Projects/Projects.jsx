import React, { useContext } from "react";
import Card from "../Card/Card";
import ProjectsContext from "../../context/ProjectsContext";
import "../../stylesheets/Projects.css";

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div className="projects">
    <h1>Projects</h1>
      <div className="card-list">
        {projects.map((project) => (
          <Card key={project.name} cardClass="projects" project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
