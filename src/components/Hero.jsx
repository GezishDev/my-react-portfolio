import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { ReactTyped } from "react-typed";
import { useTranslation } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpg";
import "../styles/Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  const typedStrings = [
    t("hero.typed_1"),
    t("hero.typed_2"),
    t("hero.typed_3"),
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow & Status */}
          <div className="hero-header-meta">
            <span className="hero-eyebrow">
              {t("hero.eyebrow")}
            </span>
            <span className="status-chip live">
              <span className="status-dot"></span>
              {t("hero.status")}
            </span>
          </div>

          {/* Headline with rotating typed keyword inline */}
          <h1 className="hero-headline">
            <span>{t("hero.headline_part1")} </span>
            <span className="typed-inline-wrapper">
              <span className="highlight-text typed-container">
                <ReactTyped
                  key={typedStrings.join("-")}
                  strings={typedStrings}
                  typeSpeed={60}
                  backSpeed={40}
                  backDelay={2000}
                  loop
                />
              </span>
            </span>
          </h1>

          {/* Support Narrative */}
          <p className="hero-support">
            {t("hero.support")}
          </p>

          {/* Key Highlights (Strictly Verified Facts) */}
          <div className="hero-meta-grid">
            <div className="hero-meta-item">
              <span className="meta-label">{t("hero.meta_focus_label")}</span>
              <span className="meta-val">{t("hero.meta_focus_val")}</span>
            </div>
            <div className="hero-meta-item">
              <span className="meta-label">{t("hero.meta_edu_label")}</span>
              <span className="meta-val">{t("hero.meta_edu_val")}</span>
            </div>
            <div className="hero-meta-item">
              <span className="meta-label">{t("hero.meta_found_label")}</span>
              <span className="meta-val">{t("hero.meta_found_val")}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              <span>{t("hero.explore_work")}</span>
              <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FiMail aria-hidden="true" />
              <span>{t("hero.contact_me")}</span>
            </a>
            <a
              href="/cv/Gezahegn_Abera_Developer_CV.pdf"
              download="Gezahegn_Abera_Developer_CV.pdf"
              className="btn btn-secondary"
              aria-label={t("hero.download_cv")}
            >
              <FiDownload aria-hidden="true" />
              <span>{t("hero.download_cv")}</span>
            </a>
          </div>
        </div>

        {/* Profile Card / Accent Frame */}
        <div className="hero-media-wrapper">
          <div className="hero-media-card">
            <div className="hero-media-inner">
              <img
                src={profileImg}
                alt="Gezahegn Abera, Junior Full-Stack Developer"
                className="hero-avatar"
                width="340"
                height="380"
                loading="eager"
              />
              <div className="hero-avatar-overlay"></div>
            </div>
            <div className="hero-card-meta">
              <div className="hero-card-id">
                <span className="card-name">Gezahegn Abera</span>
                <span className="card-role">{t("hero.role_card")}</span>
              </div>
              <span className="card-loc">{t("hero.location")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
