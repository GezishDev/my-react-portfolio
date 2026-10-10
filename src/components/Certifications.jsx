import { useState } from "react";
import { FiExternalLink, FiChevronDown, FiChevronUp, FiAward } from "react-icons/fi";
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
    designation: "Badge",
    fileLink: "/certs/ai-literacy-badge.pdf",
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
    designation: "Badge",
    fileLink: null,
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

        {/* Featured Row (4 Items) */}
        <div className="certs-grid">
          {featuredList.map((item) => (
            <article key={item.id} className="cert-card card">
              <div className="cert-top-bar">
                <span className="status-chip coursework">
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
                      <span className="status-chip coursework">
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

        {/* Verification Note */}
        <div className="certs-truth-note">
          <p>
            All listed credentials map to clean, verified files in <code>/public/certs/</code>.
            Detailed registry maintained in <a href="/CERTS.md" target="_blank" rel="noopener noreferrer">CERTS.md</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
