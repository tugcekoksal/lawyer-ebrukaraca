// Translation.js
import React from "react";
import { useLanguage } from "./LanguageContext";

export const Translation = ({ textKey }) => {
  const { language } = useLanguage();
  const translations = require(`./translations/${language}.json`);

  return <span>{translations[textKey]}</span>;
};
