import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import "../styles/Contact.css";

const Contact = () => {
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
    const res = await fetch("https://formspree.io/f/mwvrbogj", {
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
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
          <div className="contact-details">
            <a href="mailto:gezahegnaberamegenasa@gmail.com">
              <FiMail /> email
            </a>
            <a href="https://github.com/Gezish-Webs" target="_blank">
              <FiGithub /> github
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="btn primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="success">Message sent!</p>}
          {status === "error" && <p className="error">Oops! Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
