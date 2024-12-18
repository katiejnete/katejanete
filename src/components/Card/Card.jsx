import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardBody from "./CardBody";
import CardText from "./CardText";
import "../../stylesheets/Card.css";

const Card = ({ title, text, cardClass, firstImg, secondImg }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={`card ${cardClass}`}>
      <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardBody>
          <img
            className={`card-image ${isHovered ? "hovered" : ""}`}
            src={isHovered ? secondImg : firstImg}
            alt={`${cardClass} screenshot`}
          />
          <CardText title={title}>{text}</CardText>
        </CardBody>
      </Link>
    </div>
  );
};

export default Card;
