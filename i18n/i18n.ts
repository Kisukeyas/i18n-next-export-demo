import type { InitOptions } from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../public/locales/en/common.json";
import jaCommon from "../public/locales/ja/common.json";
import enTest from "../public/locales/en/test.json";
import jaTest from "../public/locales/ja/test.json";

const detector = new LanguageDetector(null, {
  order : ['navigator', 'localStorage']
})


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
};

i18next.use(detector).use(initReactI18next).init(option);

export default i18next;
