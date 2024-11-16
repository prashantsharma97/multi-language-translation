import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
      <LanguageSwitcher />
    </div>
  );
};

export default App;
