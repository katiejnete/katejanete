import profileImg from "../assets/profile-img.png";
import "../stylesheets/About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-intro">
        <img src={profileImg} alt="" />
        <section>
          <h2>Introduction</h2>
          <p>
            Hello, I'm Kate! I'm a Software Engineer passionate about creating
            dynamic web applications that incorporate AI. I'm excited to
            continue learning more about AI and machine learning. During my free
            time, I enjoy creating tech content to help beginner developers
            start their journey. Teaching and giving back to the community is
            something I will always love! What excites me most is the ability to
            make a difference. The way technology can improve lives and
            sustainability continues to motivate me!
          </p>
        </section>
      </div>
      <div className="about-journey">
        <h2>My Journey</h2>
        <p>
          While studying Mechanical Engineering, I realized that my true calling
          wasn't just working with hardware but it was using code to solve
          problems. Whether it was programming sensors or diving deep into
          backend development with Flask, I've always loved the challenge of
          finding creative solutions to real-world problems.
        </p>
      </div>
      <div className="passion">
        <h2>My Passion</h2>
        <p>
          In addition to building software, I was able to teach kids how to
          code. Managing classrooms of 1st and 5th graders, I saw how tools like
          Scratch and Snap can spark curiosity and help the newer generations
          grasp core computer science principles. This experience has driven my
          desire to give back to the community, whether through open-source
          contributions or mentoring future software engineers.
        </p>
      </div>
      <div className="skills">
        <h2>Skills and Technical Expertise</h2>
        <ul>
          <li>
            Programming Languages & Tools: Python, Node, JavaScript, Flask,
            React (I made this portfolio with React), PostgreSQL, TypeScript,
            Git, GitHub, Docker, Django, SQLite
          </li>
          <li>
            Backend Development: Experience building robust backend systems,
            working with relational databases, APIs, and data processing
          </li>
        </ul>
      </div>
      <div className="goals">
        <h2>Future Goals</h2>
        <p>
          I'm excited to apply my background and skills to fields like AI and
          machine learning, where I can use data to make a difference.
        </p>
      </div>
      <div className="connect">
        <h2>Connect With Me</h2>
        <p>
          I'm excited to continue learning, growing, and attacking new
          challenges in software engineering. If you share the same passions,
          let's connect and create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
