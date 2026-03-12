import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../styles/Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform with product management and secure authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg",
    live: "https://example.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with rooms, private messaging, and file sharing.",
    tech: ["React", "Socket.io", "Express"],
    image: "/project2.jpg",
    live: "https://example.com",
    github: "https://github.com/yourusername/project2",
  },
  // Add more projects
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" data-aos="fade-up" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live Demo
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
