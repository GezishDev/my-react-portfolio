import { ReactTyped } from "react-typed";
import { FiDownload, FiMail } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpg";
import "../styles/Hero.css";

const Hero = () => {
  const { t, language } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>{t("hero.name")}</h1>
          <div className="hero-title">
            <ReactTyped
              key={language} // forces re-typing when language changes
              strings={[
                t("hero.title1"),
                t("hero.title2"),
                t("hero.title3"),
                t("hero.title4"),
                t("hero.title5"),
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>
          <p className="hero-description">{t("hero.description")}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              {t("hero.viewProjects")}
            </a>
            <a href="/resume.pdf" download className="btn outline">
              <FiDownload /> {t("hero.downloadCV")}
            </a>
            <a href="#contact" className="btn outline">
              <FiMail /> {t("hero.contactMe")}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt={t("hero.name")} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
