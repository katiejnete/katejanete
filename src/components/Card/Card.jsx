import { Link } from "react-router-dom";
import CardBody from "./CardBody";
import CardText from "./CardText";
import "../../stylesheets/Card.css";

const Card = ({ title, text, cardClass, image }) => {
  return (
    <div className={`card ${cardClass}`}>
      <Link>
        <CardBody>
          <img
            className="card-image"
            src={image}
            alt={`${cardClass} screenshot`}
          />
          <CardText title={title}>{text}</CardText>
        </CardBody>
      </Link>
    </div>
  );
};

export default Card;
