import { useTranslation } from "react-i18next";

export const useSwitchLang = () => {
	const { i18n } = useTranslation();

	const onSwitchLang = (selectedLang) => {
		const newLang = selectedLang;
		i18n.changeLanguage(newLang);
	};

	return { onSwitchLang };
};
