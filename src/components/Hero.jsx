import { useState, useRef, useEffect } from "react";
import {
  FiArrowRight,
  FiMail,
  FiDownload,
  FiTerminal,
  FiShield,
  FiLayers,
  FiCheckCircle,
  FiChevronDown,
  FiMapPin,
  FiCpu,
} from "react-icons/fi";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslation } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpg";
import "../styles/Hero.css";

// Strictly verified technologies from portfolio facts
const verifiedTechTags = [
  "React",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Linux / Docker",
];

const Hero = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [canHover, setCanHover] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Enable 3D tilt interaction exclusively for fine-pointer desktop devices
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      const handler = (e) => setCanHover(e.matches);
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
      }
    }
  }, []);

  // Motion values for smooth 3D tilt on card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 220, mass: 0.4 };
  const rawRotateX = useTransform(mouseY, [-130, 130], [6, -6]);
  const rawRotateY = useTransform(mouseX, [-130, 130], [-6, 6]);
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!canHover || prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Coordinated entrance animation sequences
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const centerpieceVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <section id="home" className="hero-section">
      {/* Cinematic Ambient Atmosphere Layer */}
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-glow hero-glow-primary" />
        <div className="hero-glow hero-glow-secondary" />
        <div className="hero-grid-mesh" />
      </div>

      <div className="container hero-container">
        {/* Left Column: Semantic Content & Typography */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow & Verified Live Status */}
          <motion.div className="hero-header-meta" variants={itemVariants}>
            <span className="hero-eyebrow">
              {t("hero.eyebrow")}
            </span>
            <span className="status-chip live" title="Current developer availability">
              <span className="status-dot-pulse" aria-hidden="true" />
              <span className="status-dot" aria-hidden="true" />
              <span>{t("hero.status")}</span>
            </span>
          </motion.div>

          {/* Headline with Distinctive Styling and Immediate Readability */}
          <motion.h1 className="hero-headline" variants={itemVariants}>
            <span className="headline-lead">{t("hero.headline_part1")} </span>
            <span className="headline-accent-wrap">
              <span className="headline-accent">{t("hero.headline_part2")}</span>
              <span className="headline-accent-glow" aria-hidden="true">
                {t("hero.headline_part2")}
              </span>
            </span>
          </motion.h1>

          {/* Support Narrative */}
          <motion.p className="hero-support" variants={itemVariants}>
            {t("hero.support")}
          </motion.p>

          {/* Verified Technical Facts Grid */}
          <motion.div className="hero-meta-grid" variants={itemVariants}>
            <div className="hero-meta-item">
              <div className="meta-header">
                <FiLayers className="meta-icon" aria-hidden="true" />
                <span className="meta-label">{t("hero.meta_focus_label")}</span>
              </div>
              <span className="meta-val">{t("hero.meta_focus_val")}</span>
            </div>

            <div className="hero-meta-item">
              <div className="meta-header">
                <FiCpu className="meta-icon" aria-hidden="true" />
                <span className="meta-label">{t("hero.meta_edu_label")}</span>
              </div>
              <span className="meta-val">{t("hero.meta_edu_val")}</span>
            </div>

            <div className="hero-meta-item">
              <div className="meta-header">
                <FiShield className="meta-icon" aria-hidden="true" />
                <span className="meta-label">{t("hero.meta_found_label")}</span>
              </div>
              <span className="meta-val">{t("hero.meta_found_val")}</span>
            </div>
          </motion.div>

          {/* Verified Tooling Strip */}
          <motion.div className="hero-tech-strip" variants={itemVariants}>
            <span className="tech-strip-label">
              <FiTerminal className="tech-strip-icon" aria-hidden="true" />
              <span>STACK //</span>
            </span>
            <div className="tech-tags-list">
              {verifiedTechTags.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#work" className="btn btn-primary hero-btn-primary">
              <span>{t("hero.explore_work")}</span>
              <FiArrowRight className="btn-icon-shift" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn-secondary">
              <FiMail aria-hidden="true" />
              <span>{t("hero.contact_me")}</span>
            </a>
            <a
              href="/cv/Gezahegn_Abera_Developer_CV.pdf"
              download="Gezahegn_Abera_Developer_CV.pdf"
              className="btn btn-secondary hero-btn-cv"
              aria-label={t("hero.download_cv")}
            >
              <FiDownload aria-hidden="true" />
              <span>{t("hero.download_cv")}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Centerpiece */}
        <motion.div
          className="hero-media-wrapper"
          variants={centerpieceVariants}
          initial="hidden"
          animate="visible"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={cardRef}
        >
          {/* Engineering Orbit Ring Graphic */}
          <div className="centerpiece-orbit-frame" aria-hidden="true">
            <svg className="centerpiece-orbit-svg" viewBox="0 0 460 460" fill="none">
              <circle
                cx="230"
                cy="230"
                r="215"
                stroke="currentColor"
                strokeDasharray="3 9"
                strokeWidth="1"
                opacity="0.3"
              />
              <circle
                cx="230"
                cy="230"
                r="170"
                stroke="currentColor"
                strokeDasharray="6 14"
                strokeWidth="1"
                opacity="0.18"
              />
              <circle
                cx="230"
                cy="230"
                r="130"
                stroke="currentColor"
                strokeWidth="0.75"
                opacity="0.12"
              />
              <path
                d="M 230 6 L 230 22 M 230 438 L 230 454 M 6 230 L 22 230 M 438 230 L 454 230"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.55"
              />
            </svg>
          </div>

          {/* Floating Micro-Badge: Architecture & APIs */}
          <div className="hero-float-chip float-chip-top">
            <span className="float-chip-icon">
              <FiTerminal aria-hidden="true" />
            </span>
            <div className="float-chip-body">
              <span className="float-chip-title">APIs & Backend</span>
              <span className="float-chip-sub">FastAPI · REST · Postgres</span>
            </div>
          </div>

          {/* Floating Micro-Badge: Systems & Foundation */}
          <div className="hero-float-chip float-chip-bottom">
            <span className="float-chip-icon">
              <FiShield aria-hidden="true" />
            </span>
            <div className="float-chip-body">
              <span className="float-chip-title">Systems Foundation</span>
              <span className="float-chip-sub">Linux · Networks · AppSec</span>
            </div>
          </div>

          {/* Interactive Card */}
          <motion.div
            className="hero-media-card"
            style={
              canHover && !prefersReducedMotion
                ? {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }
                : undefined
            }
          >
            {/* Card Glare Overlay */}
            <div className="hero-card-glare" aria-hidden="true" />

            {/* Inner Image Container */}
            <div className="hero-media-inner">
              <img
                src={profileImg}
                alt="Gezahegn Abera, Junior Full-Stack Developer"
                className="hero-avatar"
                width="360"
                height="420"
                loading="eager"
              />
              <div className="hero-avatar-overlay" aria-hidden="true" />
            </div>

            {/* Card Metadata Footer */}
            <div className="hero-card-meta">
              <div className="hero-card-id">
                <div className="card-name-row">
                  <span className="card-name">Gezahegn Abera</span>
                  <FiCheckCircle
                    className="card-verified-icon"
                    title="Verified developer identity"
                    aria-hidden="true"
                  />
                </div>
                <span className="card-role">{t("hero.role_card")}</span>
              </div>
              <div className="card-loc-wrap">
                <FiMapPin className="card-loc-icon" aria-hidden="true" />
                <span className="card-loc">{t("hero.location")}</span>
              </div>
            </div>

            {/* Micro Terminal Bar */}
            <div className="hero-card-terminal-bar">
              <span className="terminal-dot green" aria-hidden="true" />
              <span className="terminal-text">ga@dev:~$ // full-stack: ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="hero-scroll-wrapper">
        <a href="#work" className="hero-scroll-cue" aria-label="Scroll to projects">
          <span className="scroll-cue-text">EXPLORE WORK</span>
          <span className="scroll-cue-mouse" aria-hidden="true">
            <span className="scroll-cue-dot" />
          </span>
          <FiChevronDown className="scroll-cue-chevron" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
