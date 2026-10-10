import aboutImg from "../assets/about.jpg";
import { useTranslation } from "../context/LanguageContext";
import { FiServer, FiCpu, FiShield, FiCode } from "react-icons/fi";
import "../styles/About.css";

const engineeringPrinciples = [
  {
    icon: <FiServer aria-hidden="true" />,
    title: "Networking as a Foundation",
    description:
      "Understanding packets, routing, and network hardware provides clarity on how HTTP, WebSockets, and distributed APIs behave in real environments.",
  },
  {
    icon: <FiCode aria-hidden="true" />,
    title: "Backend-First Discipline",
    description:
      "A fast UI is only as reliable as the database and API beneath it. I prioritize data integrity, clean error handling, and robust schemas.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Defensive Software Habits",
    description:
      "Security is about intentionality: validating inputs, protecting secrets, and questioning assumptions at the boundary of every service.",
  },
  {
    icon: <FiCpu aria-hidden="true" />,
    title: "Continuous Systems Learning",
    description:
      "Balancing university academic theory at Jimma University with practical hands-on engineering, Linux system administration, and open-source tooling.",
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">{t("about.eyebrow")}</span>
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-description">{t("about.description")}</p>
        </header>

        <div className="about-layout-grid">
          {/* Narrative Column */}
          <div className="about-narrative-col">
            <div className="about-text-card card">
              <p className="about-para lead">
                {t("about.p1")}
              </p>
              <p className="about-para">
                {t("about.p2")}
              </p>
              <p className="about-para">
                {t("about.p3")}
              </p>
            </div>

            {/* Core Tenets Grid */}
            <div className="principles-grid">
              {engineeringPrinciples.map((item) => (
                <div key={item.title} className="principle-card card">
                  <div className="principle-icon">{item.icon}</div>
                  <div className="principle-content">
                    <h3 className="principle-title">{item.title}</h3>
                    <p className="principle-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Profile Column */}
          <div className="about-media-col">
            <div className="about-image-card card">
              <div className="about-image-inner">
                <img
                  src={aboutImg}
                  alt="Gezahegn Abera working on computer systems"
                  className="about-image"
                  width="400"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="about-image-caption">
                <span className="caption-label">{t("about.caption_label")}</span>
                <span className="caption-text">{t("about.caption_val")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
