import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("es")}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
