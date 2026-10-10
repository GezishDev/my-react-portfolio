import { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiDownload, FiSun, FiMoon } from "react-icons/fi";
import Flag from "react-flagkit";
import { useTheme } from "../context/ThemeContext";
import { useTranslation, languages } from "../context/LanguageContext";
import "../styles/Navbar.css";

const navLinks = [
  { labelKey: "nav.work", defaultLabel: "Work", href: "#work" },
  { labelKey: "nav.skills", defaultLabel: "Skills", href: "#skills" },
  { labelKey: "nav.about", defaultLabel: "About", href: "#about" },
  { labelKey: "nav.security", defaultLabel: "Security", href: "#security" },
  { labelKey: "nav.experience", defaultLabel: "Experience", href: "#experience" },
  { labelKey: "nav.coursework", defaultLabel: "Coursework", href: "#certifications" },
  { labelKey: "nav.contact", defaultLabel: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand / Monogram */}
        <a href="#home" className="navbar-logo" aria-label="Gezahegn Abera Home">
          <span className="logo-symbol">&lt;</span>
          <span className="logo-text">GA</span>
          <span className="logo-symbol">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {t(link.labelKey) !== link.labelKey ? t(link.labelKey) : link.defaultLabel}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Quick Actions */}
        <div className="navbar-actions">
          {/* Language Switcher */}
          <div className="language-dropdown">
            <button
              type="button"
              className="lang-toggle-btn"
              onClick={() => setLangOpen(!langOpen)}
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
            className="btn btn-secondary btn-sm"
            aria-label="Download Developer CV (PDF)"
          >
            <FiDownload aria-hidden="true" />
            <span>CV</span>
          </a>
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-nav"
        className={`mobile-drawer ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="container mobile-drawer-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            {/* Mobile Language and Theme Row */}
            <div className="mobile-utility-row">
              <div className="mobile-lang-options">
                {Object.keys(languages).map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={`mobile-lang-btn ${code === language ? "active" : ""}`}
                    onClick={() => {
                      changeLanguage(code);
                    }}
                  >
                    <Flag country={languages[code].flagCode} size={16} />
                    <span>{languages[code].nativeName}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="mobile-theme-btn"
                aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
              >
                {darkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
                <span>{darkMode ? "Light" : "Dark"}</span>
              </button>
            </div>

            <a
              href="/cv/Gezahegn_Abera_Developer_CV.pdf"
              download="Gezahegn_Abera_Developer_CV.pdf"
              className="btn btn-primary"
              onClick={closeMenu}
            >
              <FiDownload aria-hidden="true" />
              Download Developer CV (PDF)
            </a>
            <a
              href="https://github.com/GezishDev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FiGithub aria-hidden="true" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
