import { useState, useEffect } from "react";
import {
  FiExternalLink,
  FiTerminal,
  FiLayers,
  FiX,
  FiCheckCircle,
  FiCpu,
  FiBookOpen,
  FiMaximize2,
} from "react-icons/fi";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Projects.css";

const verifiedProjects = [
  {
    id: "aquaflex",
    title: "Aqua Flex",
    subtitle: "Waterproof Wall Paint Company Platform",
    role: "Sole Full-Stack Developer",
    status: "live",
    statusText: "Live Platform",
    liveUrl: "https://aquaflexs.org",
    image: "/screenshots/aquaflexs.png",
    altText: "Aqua Flex waterproof paint company website interface",
    problem:
      "A specialty waterproof wall paint company required an official digital presence, product catalog, and an authentic product verification mechanism to combat market counterfeits.",
    contribution:
      "Acted as the sole developer responsible for end-to-end design, implementation, deployment, and domain registration. Built customer-facing product pages and QR code verification pages enabling customers to scan physical paint bucket QR codes to instantly verify product authenticity.",
    keyDecisions:
      "Built with Next.js for server-side rendering, SEO visibility, fast page loads, and direct QR verification routing.",
    stack: ["Next.js", "React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Vercel"],
    learned: "Full product lifecycle delivery from domain setup to QR-based client verification UX.",
  },
  {
    id: "andropia",
    title: "Andropia B2B E-Commerce",
    subtitle: "Wholesale Multi-Vendor Commerce Platform",
    role: "Frontend Developer",
    status: "live",
    statusText: "Live Platform",
    liveUrl: "https://andropian.com",
    image: "/screenshots/andropian.png",
    altText: "Andropia B2B multi-vendor e-commerce platform interface",
    problem:
      "A B2B wholesale platform required a robust client interface with role-based buyer/vendor flows connected to a pre-existing Node/Express backend contract.",
    contribution:
      "Built the complete frontend using React, TypeScript, and Axios. Implemented user authentication with role-based access control, searchable/filterable product catalogs, shopping cart, checkout, administrative dashboard, and order tracking/history. Aligned endpoint paths, user roles, API client structure, and TypeScript types to the backend contract (backend developed by core team).",
    keyDecisions:
      "Structured strict TypeScript interface contracts and centralized Axios interceptors for predictable authentication and error handling.",
    stack: ["React", "TypeScript", "Axios", "REST Integration", "Tailwind CSS", "JWT Auth"],
    learned:
      "Translating complex B2B backend API contracts into strict TypeScript types and structured state management.",
  },
  {
    id: "neuraldesk",
    title: "NeuralDesk (AI Agent Workspace)",
    subtitle: "Multi-Agent Orchestration & Workflow Environment",
    role: "Full-Stack Developer",
    status: "progress",
    statusText: "Runs locally",
    liveUrl: null,
    image: null,
    codeSnippet: `# FastAPI + LangGraph Multi-Agent Node Scaffolding
@app.post("/api/v1/agents/execute")
async def execute_task(request: AgentTaskRequest, user=Depends(verify_jwt)):
    graph = StateGraph(AgentWorkflowState)
    graph.add_node("planner", plan_execution_step)
    graph.add_node("executor", run_tool_pipeline)
    workflow = graph.compile()
    return await workflow.arun({"input": request.prompt})`,
    altText: "NeuralDesk LangGraph execution node snippet",
    problem:
      "Executing multi-step automated workflows across agent tools requires structured state preservation, containerized environments, and token-authenticated requests.",
    contribution:
      "Developed the frontend and backend running locally. Built the API service using Python and FastAPI, integrated LangGraph and LangChain for multi-agent execution graphs, configured PostgreSQL with JWT authentication, and containerized the setup with Docker. Login and agent workflows operate locally (not deployed to production).",
    keyDecisions:
      "Decoupled planner and executor graph nodes to allow granular inspection and state checkpoints during agent runs.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "LangGraph", "LangChain", "Docker", "JWT"],
    learned:
      "Structuring asynchronous agent graphs with LangGraph and containerizing multi-service developer environments.",
  },
  {
    id: "freepbx",
    title: "FreePBX Log Lifecycle Manager",
    subtitle: "Call Record Retention, Cleanup & Agent Monitoring Engine",
    role: "Developer (G2G IT Solutions Internship)",
    status: "progress",
    statusText: "In progress. Not fully production-tested.",
    liveUrl: null,
    image: null,
    codeSnippet: `// FreePBX Log Retention Routine & Call Center Monitoring
class LogLifecycleManager {
  public function executeRetentionPolicy(int $daysToKeep): RetentionReport {
    $cutoff = date('Y-m-d H:i:s', strtotime("-{$daysToKeep} days"));
    $this->archiveCallRecords($cutoff);
    $this->purgeAudioRecordings($cutoff);
    $this->auditAgentActivity();
    return $this->generateReport();
  }
}`,
    altText: "FreePBX Log Lifecycle Manager architecture snippet",
    problem:
      "Telephony servers running FreePBX/Asterisk generate large call detail records (CDR), logs, and audio recordings, requiring automated retention cleanup and human agent call activity monitoring.",
    contribution:
      "Engineered during internship at G2G IT Solutions using PHP, MariaDB, and FreePBX APIs. Built retention, cleanup, and archival routines for call records, system logs, and recordings, along with a monitoring module for call-center agents. Developed and tested locally only (not deployed to G2G production).",
    keyDecisions:
      "Utilized chunked batching for log purges to avoid table contention and resource locks on active telephony databases.",
    stack: ["PHP", "MariaDB", "FreePBX APIs", "Linux", "Bash"],
    learned:
      "Managing database log lifecycles and interacting with telecommunications system APIs.",
  },
  {
    id: "recipe-app",
    title: "Recipe Sharing App",
    subtitle: "Community Recipe Discovery & Publishing Platform",
    role: "Frontend Developer",
    status: "live",
    statusText: "Project Repository",
    liveUrl: "https://github.com/GezishDev/Recipe-Sharing-App",
    image: "/Recipe_sharing_app_homepage.png",
    altText: "Recipe Sharing App homepage interface",
    problem:
      "Creating an intuitive interface for browsing, discovering, and sharing community culinary recipes with responsive search.",
    contribution:
      "Built client-side interface components using React, Tailwind CSS, and client state management.",
    keyDecisions:
      "Responsive card grid optimized for mobile and desktop viewing.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    learned: "Component composition and responsive grid architectures.",
  },
  {
    id: "pharmacy-system",
    title: "Pharmacy Management System",
    subtitle: "Inventory, Supplier & Medicine Management Interface",
    role: "Full-Stack Developer",
    status: "live",
    statusText: "Project Repository",
    liveUrl: "https://github.com/GezishDev/pharmacy-management-system",
    image: "/pharmacy_home.png",
    altText: "Pharmacy Management System dashboard interface",
    problem:
      "Tracking pharmaceuticals, supplier records, and sales transactions in a unified management dashboard.",
    contribution:
      "Developed management dashboard views with PHP, Bootstrap, and relational database schema design.",
    keyDecisions:
      "Structured table layouts for rapid lookup of inventory stock levels and supplier status.",
    stack: ["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
    learned: "CRUD workflows and tabular relational data interfaces.",
  },
  {
    id: "feven-makeup",
    title: "Feven Makeup Store",
    subtitle: "Cosmetics & Beauty Product Catalog",
    role: "Frontend Developer",
    status: "live",
    statusText: "Project Repository",
    liveUrl: "https://github.com/GezishDev/feven-makeup-store",
    image: "/Home.png",
    altText: "Feven Makeup Store catalog homepage",
    problem:
      "Providing a modern, clean web storefront to showcase beauty products and promotional merchandise.",
    contribution:
      "Built responsive storefront layout using semantic HTML, CSS, and interactive JavaScript.",
    keyDecisions:
      "High visual hierarchy with clean product imagery display.",
    stack: ["HTML", "CSS", "JavaScript"],
    learned: "CSS layout techniques and cross-browser styling.",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  // Keyboard Escape listener and scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="work" className="projects-section">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">{t("projects.eyebrow")}</span>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="section-description">{t("projects.description")}</p>
        </header>

        <div className="projects-grid">
          {verifiedProjects.map((project) => (
            <article key={project.id} className="project-card card">
              {/* Media Container: Clickable Thumbnail / Architecture Code */}
              <div
                className="project-media-container clickable-media"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`Open case study details for ${project.title}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.altText}
                    className="project-screenshot"
                    width="640"
                    height="360"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-code-preview" aria-label={project.altText}>
                    <div className="preview-terminal-header">
                      <span className="preview-terminal-dot red"></span>
                      <span className="preview-terminal-dot amber"></span>
                      <span className="preview-terminal-dot green"></span>
                      <span className="preview-terminal-title">
                        <FiTerminal aria-hidden="true" />
                        architecture_preview.ts
                      </span>
                    </div>
                    <pre className="preview-code-block">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="project-media-hover-overlay" aria-hidden="true">
                  <span className="hover-overlay-pill">
                    <FiMaximize2 className="hover-pill-icon" />
                    <span>{t("projects.view_details")}</span>
                  </span>
                </div>

                {/* Status Chip Overlay */}
                <div className="project-status-badge">
                  <span className={`status-chip ${project.status}`}>
                    <span className="status-dot"></span>
                    {project.statusText}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="project-body">
                <div className="project-meta-top">
                  <span className="project-role-tag">{project.role}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-link"
                      aria-label={`Visit live site for ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{t("projects.visit_live")}</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                {/* Concise Impact Teaser */}
                <p className="project-brief">{project.problem}</p>

                {/* Stack Chips */}
                <div className="project-stack" aria-label="Technologies used">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Dedicated Card Action Bar */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-case-study"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View deep-dive case study for ${project.title}`}
                  >
                    <FiLayers aria-hidden="true" />
                    <span>{t("projects.view_details")}</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-live-text-link"
                      aria-label={`Visit ${project.title}`}
                    >
                      <span>{t("projects.visit_live")}</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Pop-Up Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="project-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Modal Top Bar */}
            <div className="project-modal-header">
              <div className="modal-header-meta">
                <span className="project-role-tag">{selectedProject.role}</span>
                <span className={`status-chip ${selectedProject.status}`}>
                  <span className="status-dot"></span>
                  {selectedProject.statusText}
                </span>
              </div>
              <button
                type="button"
                className="modal-close-icon-btn"
                onClick={closeModal}
                aria-label={t("projects.close_modal")}
              >
                <FiX aria-hidden="true" />
              </button>
            </div>

            {/* Modal Title */}
            <div className="modal-title-bar">
              <h3 id="modal-project-title" className="modal-project-title">
                {selectedProject.title}
              </h3>
              <p className="modal-project-subtitle">{selectedProject.subtitle}</p>
            </div>

            {/* Modal Media Showcase */}
            <div className="modal-media-preview">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.altText}
                  className="modal-preview-img"
                />
              ) : (
                <div className="project-code-preview modal-code-box">
                  <div className="preview-terminal-header">
                    <span className="preview-terminal-dot red"></span>
                    <span className="preview-terminal-dot amber"></span>
                    <span className="preview-terminal-dot green"></span>
                    <span className="preview-terminal-title">
                      <FiTerminal aria-hidden="true" />
                      architecture_deep_dive.ts
                    </span>
                  </div>
                  <pre className="preview-code-block">
                    <code>{selectedProject.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Structured Architectural Narrative */}
            <div className="modal-narrative-sections">
              {/* Problem */}
              <div className="modal-breakdown-card">
                <div className="breakdown-header">
                  <FiTerminal className="breakdown-icon" aria-hidden="true" />
                  <span className="breakdown-label">{t("projects.label_problem")}</span>
                </div>
                <p className="breakdown-body">{selectedProject.problem}</p>
              </div>

              {/* Contribution */}
              <div className="modal-breakdown-card">
                <div className="breakdown-header">
                  <FiCheckCircle className="breakdown-icon" aria-hidden="true" />
                  <span className="breakdown-label">{t("projects.label_contribution")}</span>
                </div>
                <p className="breakdown-body">{selectedProject.contribution}</p>
              </div>

              {/* Key Technical Decision */}
              <div className="modal-breakdown-card">
                <div className="breakdown-header">
                  <FiCpu className="breakdown-icon" aria-hidden="true" />
                  <span className="breakdown-label">{t("projects.label_decision")}</span>
                </div>
                <p className="breakdown-body">{selectedProject.keyDecisions}</p>
              </div>

              {/* What I Learned */}
              {selectedProject.learned && (
                <div className="modal-breakdown-card">
                  <div className="breakdown-header">
                    <FiBookOpen className="breakdown-icon" aria-hidden="true" />
                    <span className="breakdown-label">{t("projects.label_learned")}</span>
                  </div>
                  <p className="breakdown-body">{selectedProject.learned}</p>
                </div>
              )}

              {/* Technology Stack Matrix */}
              <div className="modal-stack-section">
                <span className="modal-stack-label">TECHNOLOGIES & TOOLING</span>
                <div className="modal-stack-chips">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="tech-chip modal-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="modal-footer-actions">
              <button
                type="button"
                className="btn btn-secondary modal-btn-close"
                onClick={closeModal}
              >
                <span>{t("projects.close_modal")}</span>
              </button>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary modal-btn-live"
                >
                  <span>{t("projects.visit_live")}</span>
                  <FiExternalLink aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
