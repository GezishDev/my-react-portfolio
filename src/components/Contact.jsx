import { useState } from "react";
import { FiMail, FiGithub, FiCopy, FiCheck, FiArrowRight } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const emailAddress = "gezahegnaberamegenasa@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mwvrbogj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setShowFormModal(false);
          setStatus("");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                  <button
                    type="button"
                    onClick={() => setShowFormModal(true)}
                    className="btn btn-primary btn-sm"
                  >
                    <span>{t("contact.send_btn")}</span>
                    <FiArrowRight aria-hidden="true" />
                  </button>
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

            {/* Interactive Send Message Modal */}
            {showFormModal && (
              <div className="contact-modal-backdrop" onClick={() => setShowFormModal(false)}>
                <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h3>{t("contact.heading")}</h3>
                    <button
                      type="button"
                      className="modal-close-btn"
                      onClick={() => setShowFormModal(false)}
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>

                  <form className="modal-contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-msg">Message</label>
                      <textarea
                        id="contact-msg"
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>

                    <div className="modal-form-actions">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Sending..." : "Submit Message"}
                      </button>
                      <a
                        href={`mailto:${emailAddress}?subject=Inquiry from Portfolio`}
                        className="btn btn-secondary"
                      >
                        Open in Mail App
                      </a>
                    </div>

                    {status === "success" && (
                      <p className="form-status-msg success">
                        ✓ Message sent successfully! I will reply shortly.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="form-status-msg error">
                        Could not send message. Please email me directly at {emailAddress}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            )}

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
