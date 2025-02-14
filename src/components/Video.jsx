const Video = ({ video, index }) => {
  return (
    <div key={index} className="video">
      <video controls>
        <source src={video.source} type="video/mp4" />
      </video>
      <div>
        <h3>{video.title}</h3>
      </div>
    </div>
  );
};

export default Video;
