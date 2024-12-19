import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardBody from "./CardBody";
import CardText from "./CardText";
import "../../stylesheets/Card.css";

const Card = ({ project, cardClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {name, title, text, images} = project;
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={`card ${cardClass}`}>
      <Link to={`/projects/${name}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardBody>
          <img
            className={`card-image ${isHovered ? "hovered" : ""}`}
            src={isHovered ? images[1] : images[0]}
            alt={`${cardClass} screenshot`}
          />
          <CardText title={title}>{text}</CardText>
        </CardBody>
      </Link>
    </div>
  );
};

export default Card;
