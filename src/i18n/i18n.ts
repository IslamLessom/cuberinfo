import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Используем загрузчик для загрузки переводов
  .use(LanguageDetector) // Используем детектор языка
  .use(initReactI18next) // Передаем i18n в react-i18next
  .init({
    fallbackLng: "en", // Язык по умолчанию
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к файлам переводов
    },
  });

export default i18n;
