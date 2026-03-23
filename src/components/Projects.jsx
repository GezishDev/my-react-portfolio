import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Projects.css";

const projects = [
  {
    titleKey: "projects.recipe.title",
    descKey: "projects.recipe.desc",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/Recipe_sharing_app_homepage.png", // ← your screenshot path
    live: "hhttps://github.com/GezishDev/Recipe-Sharing-App", // ← replace with your demo link
    github: "https://github.com/GezishDev/Recipe-Sharing-App",
  },
  {
    titleKey: "projects.pharmacy.title",
    descKey: "projects.pharmacy.desc",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/pharmacy_home.png",
    live: "https://github.com/GezishDev/pharmacy-management-system",
    github: "https://github.com/GezishDev/pharmacy-management-system",
  },
  {
    titleKey: "projects.makeup.title",
    descKey: "projects.makeup.desc",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Home.png",
    live: "https://github.com/GezishDev/feven-makeup-store",
    github: "https://github.com/GezishDev/feven-makeup-store",
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
