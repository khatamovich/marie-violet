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

// Background image
import bgPrimary from "../../assets/images/fire-verses.jpg";

export default function PoetryDetails() {
	const { data } = useGetDataById(jsonData.en, 8);

	if (!data) return null;

	return (
		<PoetryPage $bg={bgPrimary}>
			<HeaderContainer>
				<GoBack />
			</HeaderContainer>

			<MainContainer>
				<PoetryPageTitle>{data.name.en}</PoetryPageTitle>

				<blockquote>{data.content?.en}</blockquote>
			</MainContainer>

			<HomeContactsContainer>
				<Contacts />
			</HomeContactsContainer>
		</PoetryPage>
	);
}
