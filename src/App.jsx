import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Security from "./components/Security";
import ExperienceEducation from "./components/ExperienceEducation";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Accessibility Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content">
          <Hero />
          <Projects />
          <Skills />
          <Security />
          <ExperienceEducation />
          <About />
          <Certifications />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
