import { useTranslation } from "../context/LanguageContext";
import aboutImg from "../assets/about.jpg";
import "../styles/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-image">
          <img src={aboutImg} alt={t("about.title")} />
        </div>
        <div className="about-content">
          <h2>{t("about.title")}</h2>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <a href="/resume.pdf" download className="btn primary">
            {t("about.downloadResume")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
