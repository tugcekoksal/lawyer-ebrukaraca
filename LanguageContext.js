import React, { createContext, useContext, useState } from "react";
import en from "./translations/en.json";
import tr from "./translations/tr.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const translations = {
    tr: tr,
    en: en,
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
