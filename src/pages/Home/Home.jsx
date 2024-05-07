import {
	MainContainer,
	LangsContainer,
	ContactsContainer,
} from "./Page.styled";

// Simple components
import Background from "../../components/Background/Background";
import Menu from "../../components/Menu/Menu";
import Langs from "../../components/Langs/Langs";
import Contacts from "../../components/Contacts/Contacts";

// Background image
import bgPrimary from "../../assets/images/main-page-bg-primary.jpg";
import { useTranslation } from "react-i18next";
import { useSwitchLang } from "../../hooks/useSwitchLang";
import { Helmet } from "react-helmet";

export default function Home() {
	const { onSwitchLang } = useSwitchLang();
	const {
		t,
		i18n: { language },
	} = useTranslation("common");

	return (
		<Background bg={bgPrimary} animateBg={true}>
			{/*SEO*/}
			<Helmet>
				<title>{t("home-page.SEO.title")}</title>
				<meta name="description" content={t("home-page.SEO.description")} />
				<meta name="keywords" content={t("home-page.SEO.keywords")} />
				<meta name="author" content={t("author")} />
				<link rel="canonical" href={t("home-page.SEO.canonicalURL")} />
			</Helmet>

			<LangsContainer>
				<Langs onSwitchLang={onSwitchLang} />
			</LangsContainer>

			<MainContainer>
				<Menu language={language} />
			</MainContainer>

			<ContactsContainer>
				<Contacts />
			</ContactsContainer>
		</Background>
	);
}
