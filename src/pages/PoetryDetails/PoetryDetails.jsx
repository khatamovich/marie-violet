import {
	PoetryPage,
	PoetryPageTitle,
	HeaderContainer,
	MainContainer,
	HomeContactsContainer,
} from "./Page.styled";
import Contacts from "../../components/Contacts/Contacts";
import GoBack from "../../components/GoBack/GoBack";
import { useGetDataById } from "../../hooks/useGetDataById";
import jsonData from "../../static/poems";
import { Helmet } from "react-helmet";

// Background image
import bgPrimary from "../../assets/images/fire-verses.jpg";
import { useTranslation } from "react-i18next";

export default function PoetryDetails() {
	const {
		t,
		i18n: { language },
	} = useTranslation("common");
	const { data } = useGetDataById(jsonData[language], 8);

	if (!data) return null;

	return (
		<PoetryPage $bg={bgPrimary}>
			{/*SEO*/}
			<Helmet>
				<title>{data.name}</title>
				<meta name="author" content={t("author")} />
			</Helmet>
			;
			<HeaderContainer>
				<GoBack />
			</HeaderContainer>
			<MainContainer>
				<PoetryPageTitle>{data.name}</PoetryPageTitle>

				<blockquote>{data.content}</blockquote>
			</MainContainer>
			<HomeContactsContainer>
				<Contacts />
			</HomeContactsContainer>
		</PoetryPage>
	);
}
