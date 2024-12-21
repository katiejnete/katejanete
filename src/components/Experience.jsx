import React, { useContext } from "react";
import ExperienceContext from "../context/ExperienceContext";
import "../stylesheets/Experience.css";

const Experience = () => {
  const { experiences } = useContext(ExperienceContext);
  if (!experiences) return <div>Loading...</div>;

  return (
    <div className="experience">
      <h1>Relevant Experience</h1>
      {experiences.map(({ role, company, timeline, skills }) => {
        return (
          <div key={role}>
            <h2>
              <strong>{role}</strong> - {company} <br />
              <em>{timeline}</em>
            </h2>
            <ul>
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
