import styled from "styled-components";
import { Page, Title } from "../Poetry/Page.styled";
import { $Container } from "../../components/Container/Component.styled";
import { ContactsContainer } from "../Home/Page.styled";

export const PoetryPage = Page;

export const HeaderContainer = styled($Container)`
	height: auto;
	padding: 2em 0 1em;

	display: flex;
	justify-content: flex-end;
	z-index: 2;
`;

export const MainContainer = styled($Container)`
	width: 90%;
	padding-bottom: 7.5em;
	z-index: 2;
`;

export const PoetryPageTitle = styled(Title)`
	display: none;
`;

export const BooksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3.25em;
`;

export const HomeContactsContainer = ContactsContainer;
