import type { InitOptions } from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../public/locales/en/common.json";
import jaCommon from "../public/locales/ja/common.json";
import enTest from "../public/locales/en/test.json";
import jaTest from "../public/locales/ja/test.json";

const getLocale = () => {
  const DEFAULT_LNG = "ja";
  // console.log({ WINDOW: typeof window })
  if (typeof window === "undefined") return DEFAULT_LNG;
  // Perform localStorage action
  return localStorage.getItem("lng") || DEFAULT_LNG;
};

const option: InitOptions = {
  resources: {
    en: {
      Common: enCommon,
      Test: enTest,
    },
    ja: {
      Common: jaCommon,
      Test: jaTest,
    },
  },
  lng: getLocale(),
  detection: {
    order: ["localStorage", "navigator"],
  },
};

i18next.use(LanguageDetector).use(initReactI18next).init(option);

export default i18next;
