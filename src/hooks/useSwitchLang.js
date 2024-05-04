import { useTranslation } from "react-i18next";

export const useSwitchLang = () => {
	const { i18n } = useTranslation();

	const onSwitchLang = (selectedLang) => {
		setTimeout(() => {
			const newLang = selectedLang;
			i18n.changeLanguage(newLang);
		}, 500);
	};

	return { onSwitchLang };
};
