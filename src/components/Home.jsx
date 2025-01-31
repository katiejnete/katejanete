import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";
import ProjectsContext from "../context/ProjectsContext";
import "../stylesheets/Home.css";

const Home = () => {
  const { projects } = useContext(ProjectsContext);
  if (!projects) return <div>Loading...</div>;

  return (
    <div className="home">
      <div className="home-intro">
        <h2>Full-Stack Software Engineer</h2>
        <p>
          AI & Machine Learning Enthusiast ⋅ Python ⋅ Node.js ⋅ SQL ⋅ React ⋅
          APIs ⋅ Social Impact & Tech Innovation
        </p>
        <Link className="app-link" id="home-cta" to="/projects">
          See All Projects
        </Link>
      </div>
      <div className="home-featured">
        <h2>Featured</h2>
        <div className="card-list">
          <Card cardClass="home-featured" project={projects[0]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
