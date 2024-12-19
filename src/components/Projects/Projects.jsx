import React, { useContext } from "react";
import Card from "../Card/Card";
import ProjectsContext from "../../context/ProjectsContext";

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

    return (
      <div className="card-list">
        <h1>Projects</h1>
        {projects.map((project) => <Card key={project.name} cardClass="projects" project={project} />)}
      </div>
    );
  };
  
  export default Projects;