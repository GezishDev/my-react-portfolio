import { FiShield, FiLock, FiServer, FiCheckCircle, FiDownload } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Security.css";

const securityPillars = [
  {
    icon: <FiLock aria-hidden="true" />,
    title: "Authentication & Role-Based Access",
    description:
      "Implementing JWT verification with signature checks, token expirations, and role-based routing (built into Andropia B2B and NeuralDesk).",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Secure Coding & Input Validation",
    description:
      "Writing parameterized queries in PHP/PDO and FastAPI/PostgreSQL to guard against SQL injection, alongside client/server schema validation.",
  },
  {
    icon: <FiServer aria-hidden="true" />,
    title: "Product Verification Integrity",
    description:
      "Applying verification concepts practically, such as Aqua Flex's unique QR code scanning workflow to verify genuine manufactured products.",
  },
  {
    icon: <FiCheckCircle aria-hidden="true" />,
    title: "Networking & Protocol Awareness",
    description:
      "Leveraging Cisco Introduction to Cybersecurity coursework and networking exposure to understand transport security, ports, and segmentation.",
  },
];

const Security = () => {
  const { t } = useTranslation();

  return (
    <section id="security" className="security-section">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">{t("security.eyebrow")}</span>
          <h2 className="section-title">{t("security.title")}</h2>
          <p className="section-description">{t("security.description")}</p>
        </header>

        <div className="security-grid">
          {securityPillars.map((pillar) => (
            <div key={pillar.title} className="security-card card">
              <div className="security-icon-wrapper">{pillar.icon}</div>
              <h3 className="security-card-title">{pillar.title}</h3>
              <p className="security-card-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Truthfulness & Verification Callout */}
        <div className="security-disclaimer card">
          <div className="disclaimer-header">
            <span className="status-chip learning">
              <span className="status-dot"></span>
              {t("security.badge")}
            </span>
            <span className="disclaimer-tag">{t("security.tag")}</span>
          </div>
          <p className="disclaimer-text">
            <strong>{t("security.disclosure_label")} </strong>
            {t("security.disclosure_text")}
          </p>
          <div className="security-secondary-cv-box">
            <a
              href="/cv/Gezahegn_Abera_Networking_Security_CV.pdf"
              download="Gezahegn_Abera_Networking_Security_CV.pdf"
              className="btn btn-secondary security-cv-btn"
              aria-label={t("security.download_cv")}
            >
              <FiDownload aria-hidden="true" className="security-cv-icon" />
              <span>{t("security.download_cv")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
