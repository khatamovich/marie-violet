import styled from "styled-components";
import { Link } from "react-router-dom";
import { $Container } from "../../components/Container/Component.styled";
import { $Background } from "../../components/Background/Component.styled";
import { ContactsContainer } from "../Home/Page.styled";

export const Page = styled($Background)`
	display: flex;
	flex-direction: column;
	height: auto;
	min-height: 100%;

	background-size: cover;
	background-position: center;
`;

export const HeaderContainer = styled($Container)`
	height: auto;
	padding: 2em 0 1em;

	display: flex;
	justify-content: flex-end;
`;

export const MainContainer = styled($Container)`
	height: unset;
	flex: 1;
	padding-bottom: 6.5em;

	display: flex;
	flex-direction: column;
	text-align: center;

	.pagination-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1em;
		margin-top: 2em;

		list-style: none;
		-webkit-user-select: none;
		user-select: none;

		.next,
		.previous {
			cursor: pointer;

			&:hover {
				opacity: 0.75;
			}
		}

		a {
			font-weight: inherit;
			font-family: inherit;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: auto;
			height: 100%;
			width: 100%;
		}

		.pagination-item {
			font-family: Arial, sans-serif;
			cursor: pointer;
			border-radius: 5px;
			overflow: hidden;

			display: flex;

			a {
				padding: 0.125em 0.75em;
			}

			&.selected {
				background: var(--gradient-bg-primary);
				font-weight: 700;
			}
		}
	}
`;

export const Title = styled.h1`
	font-size: 3rem;
	line-height: 0.9;
	letter-spacing: unset;
	text-transform: capitalize;

	border-bottom: 1px solid #eee;
	padding-bottom: 0.5em;
	margin-bottom: 0.5em;
`;

export const PoemsList = styled.div`
	font-size: 1.5rem;
	line-height: 1.25;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	flex: 1;
`;

export const PoemsItem = styled(Link)`
	font-size: 1.75rem;
`;

export const HomeContactsContainer = ContactsContainer;
