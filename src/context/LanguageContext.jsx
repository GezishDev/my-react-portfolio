/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const languages = {
  en: { name: "English", nativeName: "English", flagCode: "US" },
  om: { name: "Oromo", nativeName: "Afaan Oromoo", flagCode: "ET" },
  am: { name: "Amharic", nativeName: "አማርኛ", flagCode: "ET" },
};

import en from "../locales/en.json";
import om from "../locales/om.json";
import am from "../locales/am.json";

const translations = { en, om, am };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "en";
  });

  const t = (key) => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
};
