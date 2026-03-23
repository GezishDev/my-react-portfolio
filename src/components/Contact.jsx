import { useState } from "react";
import { FiMail, FiGithub, FiPhone } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your Formspree endpoint
    const res = await fetch("https://formspree.io/f/your-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.description")}</p>
          <div className="contact-details">
            <a href="mailto:gezahegn@example.com">
              <FiMail /> {t("contact.email")}
            </a>
            <a href="tel:+251900000000">
              {" "}
              {/* ← replace with your phone number */}
              <FiPhone /> {t("contact.phone")}
            </a>
            <a
              href="https://github.com/GezishDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> {t("contact.github")}
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>{t("contact.sendMessage")}</h3>
          <input
            type="text"
            name="name"
            placeholder={t("contact.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder={t("contact.messagePlaceholder")}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="btn primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? t("contact.sending") : t("contact.send")}
          </button>
          {status === "success" && (
            <p className="success">{t("contact.success")}</p>
          )}
          {status === "error" && <p className="error">{t("contact.error")}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
