import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (typeof window !== "undefined") {
  const Backend = require("i18next-http-backend").default;
  const LanguageDetector = require("i18next-browser-languagedetector").default;

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    });
} else {
  i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
