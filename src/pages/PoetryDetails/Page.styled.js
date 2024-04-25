import styled from "styled-components";
import { Page, Title } from "../Poetry/Page.styled";
import { $Container } from "../../components/Container/Component.styled";
import { ContactsContainer } from "../Home/Page.styled";

export const PoetryPage = Page;

export const HeaderContainer = styled($Container)`
	height: auto;
	padding: 2em 0 2.5em;

	display: flex;
	justify-content: flex-end;
	z-index: 2;
`;

export const MainContainer = styled($Container)`
	text-align: center;
	width: 90%;
	padding-bottom: 5em;
	z-index: 2;

	blockquote {
		font-size: 1.125rem;
		margin-bottom: 1em;
		white-space: pre-line;
	}
`;

export const PoetryPageTitle = styled(Title)`
	font-size: 2rem;
	line-height: 1.125;
	text-transform: unset;
	white-space: pre-line;
	max-width: 45ch;
	width: 90%;
	margin: 0 auto;
`;

export const HomeContactsContainer = ContactsContainer;
