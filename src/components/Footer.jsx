import { FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Gezahegn Abera Home">
              <span className="logo-symbol">&lt;</span>
              <span className="logo-text">GA</span>
              <span className="logo-symbol">/&gt;</span>
            </a>
            <p className="footer-tagline">
              {t("footer.tagline")}
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <div className="footer-nav-col">
              <span className="footer-nav-title">{t("footer.nav_title")}</span>
              <ul className="footer-nav-list">
                <li><a href="#work">{t("nav.work")}</a></li>
                <li><a href="#skills">{t("nav.skills")}</a></li>
                <li><a href="#security">{t("nav.security")}</a></li>
                <li><a href="#experience">{t("nav.experience")}</a></li>
                <li><a href="#about">{t("nav.about")}</a></li>
                <li><a href="#certifications">{t("nav.coursework")}</a></li>
                <li><a href="#contact">{t("nav.contact")}</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-title">{t("footer.docs_title")}</span>
              <ul className="footer-nav-list">
                <li>
                  <a href="/cv/Gezahegn_Abera_Developer_CV.pdf" download="Gezahegn_Abera_Developer_CV.pdf">
                    {t("footer.dev_cv")}
                  </a>
                </li>
                <li>
                  <a href="/cv/Gezahegn_Abera_Networking_Security_CV.pdf" download="Gezahegn_Abera_Networking_Security_CV.pdf">
                    {t("footer.net_cv")}
                  </a>
                </li>
                <li>
                  <a href="https://github.com/GezishDev" target="_blank" rel="noopener noreferrer">
                    {t("footer.github")}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Gezahegn Abera. Built with React & Vite. Hosted on Vercel.
          </p>

          <div className="footer-bottom-actions">
            <div className="footer-social-icons">
              <a
                href="https://github.com/GezishDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="footer-icon-link"
              >
                <FiGithub aria-hidden="true" />
              </a>
              <a
                href="mailto:gezahegnaberamegenasa@gmail.com"
                aria-label="Send Email"
                className="footer-icon-link"
              >
                <FiMail aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Back to top of page"
            >
              <span>{t("footer.back_to_top")}</span>
              <FiArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
