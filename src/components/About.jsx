import aboutImg from "../assets/about.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Gezahegn Abera" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a Computer Science student passionate about web development,
            networking, and cybersecurity. I enjoy building modern web
            applications with clean UI/UX and solving real-world problems
            through technology.
          </p>
          <p>
            Currently, I'm expanding my skills in full-stack development and
            cloud computing. I love collaborating on open-source projects and
            continuously learning new technologies.
          </p>
          <a href="/resume.pdf" download className="btn primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
