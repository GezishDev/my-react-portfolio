import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/ExperienceEducation.css";

const experienceItems = [
  {
    role: "Freelance Full-Stack Developer",
    organization: "Independent Client Engagements",
    period: "2024 – Present",
    type: "Freelance",
    statusBadge: "Active",
    details: [
      "Engineered business websites and custom web applications/dashboards for clients.",
      "Developed responsive client frontends and integrated backend API endpoints.",
      "Designed and maintained relational database schemas and data validations.",
    ],
  },
  {
    role: "Frontend Developer (Employee)",
    organization: "Andropia Electronics PLC",
    period: "March – June 2026",
    type: "Employment",
    statusBadge: "Completed",
    details: [
      "Built the complete client-facing frontend for the Andropia B2B e-commerce platform using React, TypeScript, and Axios.",
      "Implemented login with role-based access control, product catalog with search/filtering, shopping cart, checkout, admin dashboard, and order tracking/history.",
      "Aligned endpoint paths, user roles, API client structure, and TypeScript types to the existing Node/Express backend contract (backend developed by core team).",
    ],
  },
  {
    role: "Network Engineer Intern",
    organization: "G2G IT Solutions",
    period: "June – August 2026",
    type: "Internship",
    statusBadge: "Completed",
    details: [
      "Configured IP cameras and handled new Wi-Fi network installations.",
      "Maintained existing Wi-Fi deployments, MikroTik routers, and Cisco switches.",
      "Gained operational exposure to Juniper firewall OS.",
      "Worked with FreePBX telephony servers and developed local log lifecycle/agent monitoring tools.",
    ],
  },
];

const educationItems = [
  {
    degree: "BSc in Computer Science",
    institution: "Jimma University",
    period: "2023 – 2027 (Expected)",
    location: "Jimma, Ethiopia",
    details: [
      "Core coursework in Data Structures, Object-Oriented Programming, Algorithm Design, and Database Systems.",
      "Academic study in Computer Networks, Operating Systems, and Distributed Computing.",
      "Languages: Amharic (Native), Afaan Oromo (Native), English (Professional working).",
    ],
  },
];

const ExperienceEducation = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">{t("experience.eyebrow")}</span>
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-description">{t("experience.description")}</p>
        </header>

        <div className="timeline-columns">
          {/* Work Experience Column */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <span className="column-icon-badge">
                <FiBriefcase aria-hidden="true" />
              </span>
              <h3 className="column-title">{t("experience.col_work")}</h3>
            </div>

            <div className="timeline-list">
              {experienceItems.map((item, idx) => (
                <div key={idx} className="timeline-card card">
                  <div className="timeline-header">
                    <div className="timeline-titles">
                      <h4 className="timeline-role">{item.role}</h4>
                      <p className="timeline-org">{item.organization}</p>
                    </div>
                    <span className="status-chip coursework">
                      {item.statusBadge}
                    </span>
                  </div>
                  <div className="timeline-meta-bar">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-type">{item.type}</span>
                  </div>
                  <ul className="timeline-details">
                    {item.details.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <span className="column-icon-badge">
                <FiBookOpen aria-hidden="true" />
              </span>
              <h3 className="column-title">{t("experience.col_edu")}</h3>
            </div>

            <div className="timeline-list">
              {educationItems.map((item, idx) => (
                <div key={idx} className="timeline-card card">
                  <div className="timeline-header">
                    <div className="timeline-titles">
                      <h4 className="timeline-role">{item.degree}</h4>
                      <p className="timeline-org">{item.institution}</p>
                    </div>
                    <span className="status-chip live">
                      <span className="status-dot"></span>
                      Enrolled
                    </span>
                  </div>
                  <div className="timeline-meta-bar">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-type">{item.location}</span>
                  </div>
                  <ul className="timeline-details">
                    {item.details.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
