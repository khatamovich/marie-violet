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

export default function Home() {
	const { onSwitchLang } = useSwitchLang();

	const {
		i18n: { language },
	} = useTranslation();

	return (
		<Background bg={bgPrimary} animateBg={true}>
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
