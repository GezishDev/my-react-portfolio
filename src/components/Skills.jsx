import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiCisco } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";
import "../styles/Skills.css";

const skillsData = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaCss3Alt /> }, // placeholder
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  networking: [
    { name: "CCNA", icon: <SiCisco /> },
    { name: "Cybersecurity", icon: <FaShieldAlt /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "VS Code", icon: <FaReact /> }, // placeholder
  ],
};

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-icon">{skill.icon}</div>
    <span>{skill.name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
