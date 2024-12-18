import { Link } from "react-router-dom";
import Card from "./Card/Card";
import featuredImg from "../assets/twice-screenshot.png";
import "../stylesheets/Home.css";

const Home = () => {
  const title = "TwiceLoved: A Platform for Sharing Surplus Items";
  const text = `TwiceLoved is a web application designed to
  facilitate mutual aid by tracking free items available 
  within the user's vicinity. Built with React and Node.js,
  this platform helps reduce landfill waste and curb 
  over-consumption by connecting people with surplus items to those in need.`

  return (
    <div className="home">
      <p>Full-Stack Software Engineer</p>
      <Link id="home-cta" to="/projects">
        See All Projects
      </Link>
      <div className="card-list">
        <Card cardClass="home-featured" title={title} text={text} image={featuredImg}/>
      </div>
    </div>
  );
};

export default Home;
