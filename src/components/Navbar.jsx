import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation, languages } from "../context/LanguageContext";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import Flag from "react-flagkit";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, changeLanguage, t } = useTranslation();

  const navLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.certifications", href: "#certifications" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          GA
        </a>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.key}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Language Switcher */}
          <div className="language-dropdown">
            <button
              className="lang-toggle"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Flag country={languages[language].flagCode} size={20} />
              <span>{languages[language].nativeName}</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            {langOpen && (
              <ul className="lang-menu">
                {Object.keys(languages).map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => {
                        changeLanguage(lang);
                        setLangOpen(false);
                      }}
                    >
                      <Flag country={languages[lang].flagCode} size={20} />
                      <span>{languages[lang].nativeName}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
