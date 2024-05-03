import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from "../locales/en/common.json";
import common_ru from "../locales/ru/common.json";

i18n.use(LanguageDetector).init({
	fallbackLng: "en",
	detection: {
		order: ["localStorage"],
		caches: ["localStorage"],
	},

	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			common: common_en,
		},
		ru: {
			common: common_ru,
		},
	},
});

export const I18nProvider = ({ children }) => {
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
