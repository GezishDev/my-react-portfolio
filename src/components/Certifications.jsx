import { useState } from "react";
import { FiExternalLink, FiChevronDown, FiChevronUp, FiAward, FiCheckCircle, FiShield } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Certifications.css";

const verifiedCoursework = [
  // Top 4 Featured Row
  {
    id: "cisco-cybersec",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    designation: "Coursework",
    fileLink: "/certs/cisco-intro-cybersecurity.pdf",
    isPdf: true,
    featured: true,
  },
  {
    id: "cisco-enterprise-net",
    title: "Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    designation: "Coursework",
    fileLink: "/certs/cisco-ccna-enterprise-networking.png",
    isPdf: false,
    featured: true,
  },
  {
    id: "cisco-python-1",
    title: "Python Essentials 1",
    issuer: "Cisco / Python Institute",
    designation: "Coursework",
    fileLink: "/certs/cisco-python-essentials-1.pdf",
    isPdf: true,
    featured: true,
  },
  {
    id: "ibm-data-lit",
    title: "IBM Data Literacy",
    issuer: "IBM",
    designation: "Credly Badge",
    fileLink: "/certs/ai-literacy-badge.pdf",
    credlyUrl: "https://www.credly.com/users/gezahegn-abera",
    isPdf: true,
    featured: true,
  },
  // Additional Coursework in Expander
  {
    id: "cisco-intro-net",
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    designation: "Coursework",
    fileLink: "/certs/cisco-ccna-intro-networks.png",
    isPdf: false,
    featured: false,
  },
  {
    id: "cisco-switching-routing",
    title: "Switching, Routing and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    designation: "Coursework",
    fileLink: "/certs/cisco-ccna-switching-routing.png",
    isPdf: false,
    featured: false,
  },
  {
    id: "cisco-os-basics",
    title: "Operating Systems Basics",
    issuer: "Cisco / NDG",
    designation: "Coursework",
    fileLink: "/certs/cisco-operating-systems-basics.pdf",
    isPdf: true,
    featured: false,
  },
  {
    id: "cisco-hardware",
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    designation: "Coursework",
    fileLink: null,
    isPdf: false,
    featured: false,
  },
  {
    id: "cisco-english-it",
    title: "English for IT 1",
    issuer: "Cisco Networking Academy",
    designation: "Coursework",
    fileLink: null,
    isPdf: false,
    featured: false,
  },
  {
    id: "ibm-design",
    title: "IBM Design",
    issuer: "IBM",
    designation: "Credly Badge",
    fileLink: null,
    credlyUrl: "https://www.credly.com/users/gezahegn-abera",
    isPdf: false,
    featured: false,
  },
  {
    id: "ai-safari",
    title: "AI Safari",
    issuer: null, // Issuer unknown: show title only, no issuer
    designation: "Certificate",
    fileLink: "/certs/ai-safari.pdf",
    isPdf: true,
    featured: false,
  },
];

const Certifications = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const featuredList = verifiedCoursework.filter((item) => item.featured);
  const remainingList = verifiedCoursework.filter((item) => !item.featured);

  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">{t("certs.eyebrow")}</span>
          <h2 className="section-title">{t("certs.title")}</h2>
          <p className="section-description">{t("certs.description")}</p>
        </header>

        {/* Official Credly Verification Banner Card */}
        <div className="credly-banner-card card">
          <div className="credly-banner-glow" aria-hidden="true" />
          <div className="credly-banner-content">
            <div className="credly-brand-group">
              <div className="credly-badge-icon-box" aria-hidden="true">
                <svg
                  className="credly-brand-svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="20" r="14" fill="url(#credlyGrad)" stroke="#FF6B00" strokeWidth="1.5" />
                  <path d="M18 20L22 24L30 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 31L14 42L24 37L34 42L31 31" fill="url(#credlyRibbon)" stroke="#FF6B00" strokeWidth="1.5" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="credlyGrad" x1="10" y1="6" x2="38" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF7A00" />
                      <stop offset="1" stopColor="#E05300" />
                    </linearGradient>
                    <linearGradient id="credlyRibbon" x1="14" y1="31" x2="34" y2="42" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E05300" />
                      <stop offset="1" stopColor="#A83200" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="credly-text-info">
                <div className="credly-meta-tag-row">
                  <span className="status-chip credly-chip">
                    <span className="status-dot credly-dot"></span>
                    {t("certs.credly_badge")}
                  </span>
                  <span className="credly-auth-tag">
                    <FiCheckCircle aria-hidden="true" />
                    <span>Authenticated Registry</span>
                  </span>
                </div>
                <h3 className="credly-banner-title">{t("certs.credly_title")}</h3>
                <p className="credly-banner-desc">{t("certs.credly_desc")}</p>
                <div className="credly-meta-pills">
                  <span className="credly-pill">
                    <FiShield aria-hidden="true" className="pill-icon" />
                    <span>IBM & Partner Badges</span>
                  </span>
                  <span className="credly-pill">
                    <FiCheckCircle aria-hidden="true" className="pill-icon" />
                    <span>Publicly Verifiable</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="credly-cta-group">
              <a
                href="https://www.credly.com/users/gezahegn-abera"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary credly-profile-btn"
                aria-label="View My Credly Profile (opens in new tab)"
              >
                <span>{t("certs.credly_btn")}</span>
                <FiExternalLink aria-hidden="true" className="btn-icon-ext" />
              </a>
              <span className="credly-url-display">
                <code>credly.com/users/gezahegn-abera</code>
              </span>
            </div>
          </div>
        </div>

        {/* Featured Credential Cards Grid */}
        <div className="certs-grid">
          {featuredList.map((item) => (
            <article key={item.id} className="cert-card card">
              <div className="cert-top-bar">
                <span className={`status-chip ${item.designation.includes("Credly") ? "credly-card-chip" : "coursework"}`}>
                  {item.designation}
                </span>
                <span className="cert-icon-decor">
                  <FiAward aria-hidden="true" />
                </span>
              </div>
              <h3 className="cert-name">{item.title}</h3>
              {item.issuer && <p className="cert-issuer">{item.issuer}</p>}
              <div className="cert-footer">
                {item.fileLink ? (
                  <a
                    href={item.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-doc-link"
                    aria-label={`View document for ${item.title}`}
                  >
                    <span>{t("certs.view_cert")}</span>
                    <FiExternalLink aria-hidden="true" />
                  </a>
                ) : item.credlyUrl ? (
                  <a
                    href={item.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-doc-link credly-doc-link"
                    aria-label={`Verify ${item.title} on Credly`}
                  >
                    <span>Verify on Credly</span>
                    <FiExternalLink aria-hidden="true" />
                  </a>
                ) : (
                  <span className="cert-doc-status" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {t("certs.completed")}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Accessible Expander for Additional Coursework */}
        {remainingList.length > 0 && (
          <div className="certs-expander-wrapper">
            <button
              type="button"
              className="btn btn-secondary expander-btn"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              aria-controls="additional-coursework-grid"
            >
              <span>
                {showAll
                  ? t("certs.show_fewer")
                  : `${t("certs.show_all")} (+${remainingList.length})`}
              </span>
              {showAll ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
            </button>

            {showAll && (
              <div id="additional-coursework-grid" className="certs-grid expanded-grid">
                {remainingList.map((item) => (
                  <article key={item.id} className="cert-card card">
                    <div className="cert-top-bar">
                      <span className={`status-chip ${item.designation.includes("Credly") ? "credly-card-chip" : "coursework"}`}>
                        {item.designation}
                      </span>
                      <span className="cert-icon-decor">
                        <FiAward aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="cert-name">{item.title}</h3>
                    {item.issuer && <p className="cert-issuer">{item.issuer}</p>}
                    <div className="cert-footer">
                      {item.fileLink ? (
                        <a
                          href={item.fileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-doc-link"
                          aria-label={`View document for ${item.title}`}
                        >
                          <span>{t("certs.view_cert")}</span>
                          <FiExternalLink aria-hidden="true" />
                        </a>
                      ) : item.credlyUrl ? (
                        <a
                          href={item.credlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-doc-link credly-doc-link"
                          aria-label={`Verify ${item.title} on Credly`}
                        >
                          <span>Verify on Credly</span>
                          <FiExternalLink aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="cert-doc-status" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                          {t("certs.completed")}
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
