import { Content, LangsContainer, ContactsContainer } from "./Page.styled";

// Simple components
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";
import Menu from "../../components/Menu/Menu";
import Langs from "../../components/Langs/Langs";
import Contacts from "../../components/Contacts/Contacts";

// Background image
import bgPrimary from "../../assets/images/main-page-bg-primary.jpg";

export default function Home() {
	const bg = `url(${bgPrimary}) center / cover no-repeat`;

	return (
		<Layout bg={bg} animateBg={true}>
			<LangsContainer>
				<Langs />
			</LangsContainer>

			<Container>
				<Content>
					<Menu />
				</Content>
			</Container>

			<ContactsContainer>
				<Contacts />
			</ContactsContainer>
		</Layout>
	);
}
