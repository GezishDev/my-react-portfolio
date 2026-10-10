import {
  FaJs,
  FaReact,
  FaHtml5,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaLinux,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMariadb,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { FiLayers, FiShield } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Skills.css";

const skillCategories = [
  {
    category: "Frontend",
    description: "Component architecture, responsive layouts, and typed client state.",
    skills: [
      { name: "JavaScript", icon: <FaJs aria-hidden="true" /> },
      { name: "TypeScript", icon: <SiTypescript aria-hidden="true" /> },
      { name: "React", icon: <FaReact aria-hidden="true" /> },
      { name: "Next.js", icon: <FiLayers aria-hidden="true" /> },
      { name: "HTML / CSS", icon: <FaHtml5 aria-hidden="true" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" /> },
      { name: "Bootstrap", icon: <SiBootstrap aria-hidden="true" /> },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Server routing, API integration, token authentication, and background logic.",
    skills: [
      { name: "Node.js / Express", icon: <FaNodeJs aria-hidden="true" /> },
      { name: "Python / FastAPI", icon: <SiFastapi aria-hidden="true" /> },
      { name: "PHP", icon: <FaPhp aria-hidden="true" /> },
      { name: "REST Integration", icon: <FiLayers aria-hidden="true" /> },
      { name: "JWT", icon: <FiShield aria-hidden="true" /> },
    ],
  },
  {
    category: "Databases",
    description: "Relational table schemas, queries, and document storage.",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql aria-hidden="true" /> },
      { name: "MongoDB", icon: <SiMongodb aria-hidden="true" /> },
      { name: "MariaDB", icon: <SiMariadb aria-hidden="true" /> },
    ],
  },
  {
    category: "Tools & Systems",
    description: "Version control, containerization, deployment platforms, and Linux systems.",
    skills: [
      { name: "Git / GitHub", icon: <FaGithub aria-hidden="true" /> },
      { name: "Docker", icon: <FaDocker aria-hidden="true" /> },
      { name: "Linux", icon: <FaLinux aria-hidden="true" /> },
      { name: "Vercel", icon: <FiLayers aria-hidden="true" /> },
    ],
  },
];

const learningSkills = [
  {
    name: "Flutter & Dart",
    focus: "Cross-platform mobile development (early learning only; active study).",
    icon: <SiFlutter aria-hidden="true" />,
    secondaryIcon: <SiDart aria-hidden="true" />,
  },
  {
    name: "Application Security Fundamentals",
    focus: "Defensive web coding, authentication/authorization hardening, and API security (personal direction only; no audits or commercial claims).",
    icon: <FaShieldAlt aria-hidden="true" />,
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">{t("skills.eyebrow")}</span>
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-description">{t("skills.description")}</p>
        </header>

        {/* Core Confident Skills Grid */}
        <div className="skills-category-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skills-cat-card card">
              <div className="cat-card-header">
                <h3 className="cat-title">{cat.category}</h3>
                <p className="cat-desc">{cat.description}</p>
              </div>
              <ul className="skills-pill-list" aria-label={`Skills in ${cat.category}`}>
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="skill-pill">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="learning-banner card">
          <div className="learning-header">
            <div className="learning-badge">
              <span className="status-chip learning">
                <span className="status-dot"></span>
                {t("skills.learning_status")}
              </span>
            </div>
            <h3 className="learning-title">{t("skills.learning_title")}</h3>
            <p className="learning-sub">{t("skills.learning_sub")}</p>
          </div>

          <div className="learning-grid">
            {learningSkills.map((item) => (
              <div key={item.name} className="learning-item">
                <div className="learning-item-icon">
                  {item.icon}
                  {item.secondaryIcon && (
                    <span className="secondary-icon">{item.secondaryIcon}</span>
                  )}
                </div>
                <div className="learning-item-content">
                  <h4 className="learning-item-name">{item.name}</h4>
                  <p className="learning-item-focus">{item.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
