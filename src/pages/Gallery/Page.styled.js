import styled from "styled-components";
import { Page } from "../Poetry/Page.styled";
import { $Container } from "../../components/Container/Component.styled";
import { ContactsContainer } from "../Home/Page.styled";

export const GalleryPage = Page;

export const HeaderContainer = styled($Container)`
	height: auto;
	padding: 2em 0 2em;

	display: flex;
	justify-content: flex-end;
	z-index: 2;
`;

export const MainContainer = styled($Container)`
	width: 90%;
	padding-bottom: 3.5em;
	z-index: 2;
`;

export const HomeContactsContainer = ContactsContainer;
