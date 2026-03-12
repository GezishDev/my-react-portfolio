import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          GA
        </a>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
