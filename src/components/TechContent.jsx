import Video from "./Video";
import "../stylesheets/TechContent.css";
import react2 from "../assets/react-2.mp4";

const videos = [
  {
    title: "React Setup in 30",
    source: react2,
  },
];

const TechContent = () => {
  return (
    <div className="tech-content">
      <h1>Tech Content</h1>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <Video key={index} video={video} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TechContent;
