import CardTitle from "./CardTitle";

const CardText = ({ children, title }) => {
    return <div className="card-text">
      <CardTitle title={title}/>
      <p>{children}</p>
    </div>;
  };
  
  export default CardText;
  