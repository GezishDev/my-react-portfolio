import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiGithub, FiDownload, FiSun, FiMoon } from "react-icons/fi";
import Flag from "react-flagkit";
import { useTheme } from "../context/ThemeContext";
import { useTranslation, languages } from "../context/LanguageContext";
import "../styles/Navbar.css";

const desktopNavLinks = [
  { labelKey: "nav.work", defaultLabel: "Work", href: "#work" },
  { labelKey: "nav.skills", defaultLabel: "Skills", href: "#skills" },
  { labelKey: "nav.about", defaultLabel: "About", href: "#about" },
  { labelKey: "nav.security", defaultLabel: "Security", href: "#security" },
  { labelKey: "nav.experience", defaultLabel: "Experience", href: "#experience" },
  { labelKey: "nav.coursework", defaultLabel: "Certifications", href: "#certifications" },
  { labelKey: "nav.contact", defaultLabel: "Contact", href: "#contact" },
];

const mobileNavLinks = [
  { labelKey: "nav.home", defaultLabel: "Home", href: "#home", num: "01" },
  { labelKey: "nav.about", defaultLabel: "About", href: "#about", num: "02" },
  { labelKey: "nav.skills", defaultLabel: "Skills", href: "#skills", num: "03" },
  { labelKey: "nav.projects", defaultLabel: "Projects", href: "#work", num: "04" },
  { labelKey: "nav.experience", defaultLabel: "Experience", href: "#experience", num: "05" },
  { labelKey: "nav.coursework", defaultLabel: "Certifications", href: "#certifications", num: "06" },
  { labelKey: "nav.contact", defaultLabel: "Contact", href: "#contact", num: "07" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const langDropdownRef = useRef(null);

  const { darkMode, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useTranslation();

  // Scroll listener for sticky styling and section indicator
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "about", "skills", "work", "experience", "certifications", "contact"];
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Support Escape key to close mobile menu or language dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isOpen) setIsOpen(false);
        if (langOpen) setLangOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, langOpen]);

  // Click outside to dismiss language dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [langOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (langOpen) setLangOpen(false);
  };

  const toggleLang = () => {
    setLangOpen((prev) => !prev);
    if (isOpen) setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  const getLabel = (link) => {
    const translated = t(link.labelKey);
    return translated && translated !== link.labelKey ? translated : link.defaultLabel;
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand / Monogram */}
        <a href="#home" className="navbar-logo" aria-label="Gezahegn Abera Home" onClick={closeMenu}>
          <span className="logo-symbol">&lt;</span>
          <span className="logo-text">GA</span>
          <span className="logo-symbol">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {desktopNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {getLabel(link)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Top Navbar Actions (Always visible on mobile & desktop) */}
        <div className="navbar-actions">
          {/* Language Switcher Dropdown */}
          <div className="language-dropdown" ref={langDropdownRef}>
            <button
              type="button"
              className="lang-toggle-btn"
              onClick={toggleLang}
              aria-label="Select language"
              aria-expanded={langOpen}
            >
              <Flag country={languages[language]?.flagCode || "US"} size={16} />
              <span className="lang-name-text">{languages[language]?.nativeName || "EN"}</span>
              <span className="dropdown-arrow">▾</span>
            </button>
            {langOpen && (
              <ul className="lang-menu-list">
                {Object.keys(languages).map((code) => (
                  <li key={code}>
                    <button
                      type="button"
                      className={`lang-option-btn ${code === language ? "active" : ""}`}
                      onClick={() => {
                        changeLanguage(code);
                        setLangOpen(false);
                      }}
                    >
                      <Flag country={languages[code].flagCode} size={16} />
                      <span>{languages[code].nativeName}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>

          {/* Desktop-only action links */}
          <a
            href="https://github.com/GezishDev"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-link"
            aria-label="GitHub Profile"
          >
            <FiGithub aria-hidden="true" />
          </a>
          <a
            href="/cv/Gezahegn_Abera_Developer_CV.pdf"
            download="Gezahegn_Abera_Developer_CV.pdf"
            className="btn btn-secondary btn-sm navbar-desktop-cv-btn"
            aria-label="Download Developer CV (PDF)"
          >
            <FiDownload aria-hidden="true" />
            <span>CV</span>
          </a>

          {/* Mobile Menu Toggle (Hamburger / Close) */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Redesigned Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`mobile-drawer ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Mobile navigation panel"
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-top">
            <div className="mobile-menu-status">
              <span className="mobile-menu-eyebrow">// NAVIGATION</span>
              <span className="mobile-menu-indicator"></span>
            </div>

            <nav className="mobile-nav-menu" aria-label="Mobile Navigation Links">
              <ul className="mobile-nav-links">
                {mobileNavLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <li key={link.href} className="mobile-nav-item">
                      <a
                        href={link.href}
                        className={`mobile-nav-link ${isActive ? "active" : ""}`}
                        onClick={closeMenu}
                      >
                        <span className="mobile-nav-num">{link.num}</span>
                        <span className="mobile-nav-text">{getLabel(link)}</span>
                        <span className="mobile-nav-arrow" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Mobile Actions: Compact, visually balanced CV & GitHub actions */}
          <div className="mobile-drawer-footer">
            <div className="mobile-actions-divider">
              <span className="mobile-actions-label">{t("nav.quick_actions")}</span>
            </div>
            <div className="mobile-actions-group">
              <a
                href="/cv/Gezahegn_Abera_Developer_CV.pdf"
                download="Gezahegn_Abera_Developer_CV.pdf"
                className="mobile-action-btn mobile-action-primary"
                onClick={closeMenu}
                aria-label="Download Developer CV (PDF)"
              >
                <FiDownload aria-hidden="true" className="mobile-action-icon" />
                <span>{t("nav.download_dev_cv")}</span>
              </a>
              <a
                href="https://github.com/GezishDev"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-action-btn mobile-action-secondary"
                onClick={closeMenu}
                aria-label="GitHub Profile"
              >
                <FiGithub aria-hidden="true" className="mobile-action-icon" />
                <span>{t("nav.github_profile")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
