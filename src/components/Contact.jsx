import { useState } from "react";
import { FiMail, FiGithub, FiCopy, FiCheck, FiArrowRight } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const emailAddress = "gezahegnaberamegenasa@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">{t("contact.eyebrow")}</span>
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="section-description">{t("contact.description")}</p>
        </header>

        <div className="contact-card card">
          <div className="contact-main-body">
            <div className="contact-text-block">
              <span className="contact-badge status-chip live">
                <span className="status-dot"></span>
                {t("contact.badge")}
              </span>
              <h3 className="contact-heading">{t("contact.heading")}</h3>
              <p className="contact-subtext">{t("contact.subtext")}</p>
            </div>

            {/* Verified Communication Channels */}
            <div className="contact-channels-grid">
              {/* Email Direct Channel */}
              <div className="channel-box">
                <div className="channel-info">
                  <span className="channel-label">{t("contact.inbox_label")}</span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="channel-value email-link"
                    aria-label={`Send email to ${emailAddress}`}
                  >
                    <FiMail aria-hidden="true" />
                    <span>{emailAddress}</span>
                  </a>
                </div>
                <div className="channel-actions">
                  <a href={`mailto:${emailAddress}`} className="btn btn-primary btn-sm">
                    <span>{t("contact.send_btn")}</span>
                    <FiArrowRight aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-sm copy-btn"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                    <span>{copied ? t("contact.copied_btn") : t("contact.copy_btn")}</span>
                  </button>
                </div>
              </div>

              {/* GitHub Channel */}
              <div className="channel-box">
                <div className="channel-info">
                  <span className="channel-label">{t("contact.repo_label")}</span>
                  <a
                    href="https://github.com/GezishDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value github-link"
                    aria-label="Visit GitHub Profile GezishDev"
                  >
                    <FiGithub aria-hidden="true" />
                    <span>github.com/GezishDev</span>
                  </a>
                </div>
                <div className="channel-actions">
                  <a
                    href="https://github.com/GezishDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>{t("contact.view_github")}</span>
                    <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy & Truthfulness Guarantee */}
            <div className="contact-privacy-footer">
              <p>
                {t("contact.privacy_note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
