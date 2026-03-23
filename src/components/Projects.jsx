import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Projects.css";

const projects = [
  {
    titleKey: "projects.ecommerce.title",
    descKey: "projects.ecommerce.desc",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg", // replace with actual path
    live: "https://example.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    titleKey: "projects.chat.title",
    descKey: "projects.chat.desc",
    tech: ["React", "Socket.io", "Express"],
    image: "/project2.jpg",
    live: "https://example.com",
    github: "https://github.com/yourusername/project2",
  },
  {
    titleKey: "projects.dashboard.title",
    descKey: "projects.dashboard.desc",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "/project3.jpg",
    live: "https://example.com",
    github: "https://github.com/yourusername/project3",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">{t("projects.title")}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" data-aos="fade-up" key={index}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3>{t(project.titleKey)}</h3>
                <p>{t(project.descKey)}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> {t("projects.viewCode")}
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> {t("projects.liveDemo")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
