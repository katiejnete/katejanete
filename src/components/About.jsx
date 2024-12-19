import profileImg from "../assets/profile-img.png";
import "../stylesheets/About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-intro">
        <img src={profileImg} alt="" />
        <section>
          <h2>
            <strong>Introduction</strong>
          </h2>
          <p>
            What if we could make every decision in life based on data,
            insights, and a little bit of code?
          </p>
          <p>
            Hello, I'm Kate! I'm a Software Engineer with a passion for turning
            complex problems into user-friendly solutions.
          </p>
        </section>
      </div>
      <div className="about-journey">
        <h2>
          <strong>My Journey</strong>
        </h2>
        <p>
          While studying Mechanical Engineering, I realized that my true calling
          wasn't just working with hardware but it was using code to solve
          problems. Whether it was programming sensors or diving deep into
          backend development with Flask, I've always loved the challenge of
          finding creative solutions to real-world problems.
        </p>
      </div>
      <div className="passion">
        <h2>
          <strong>My Passion</strong>
        </h2>
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
        <h2>
          <strong>Skills and Technical Expertise</strong>
        </h2>
        <ul>
          <li>
            Programming Languages & Tools: Python, Node, JavaScript, Flask,
            React, PostgreSQL, Docker, Git, GitHub
          </li>
          <li>
            Backend Development: Experience building robust backend systems,
            working with relational databases, APIs, and data processing
          </li>
        </ul>
      </div>
      <div className="goals">
        <h2>
          <strong>Future Goals</strong>
        </h2>
        <p>
          I'm excited to apply my background and skills to fields like AI and
          machine learning, where I can use data to make a difference.
        </p>
      </div>
      <div className="connect">
        <h2>
          <strong>Connect With Me</strong>
        </h2>
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
