import { ReactTyped } from "react-typed";
import { FiDownload, FiMail } from "react-icons/fi";
import profileImg from "../assets/profile.jpg"; // replace with your image
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Gezahegn Abera</h1>
          <div className="hero-title">
            <ReactTyped
              strings={[
                "Frontend Developer",
                "React Developer",
                "Flutter Developer",
                "Network Engineer",
                "CS Student",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>
          <p className="hero-description">
            I build responsive web applications and modern digital experiences
            using React, JavaScript, Flutter and modern web technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn outline">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="btn outline">
              <FiMail /> Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Gezahegn Abera" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
