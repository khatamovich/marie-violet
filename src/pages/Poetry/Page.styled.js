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

	position: relative;

	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;

		position: fixed;
		top: 0;
		left: 0;

		background: ${(props) => `url(${props.$bg})`} center / cover no-repeat;

		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const HeaderContainer = styled($Container)`
	height: auto;
	padding: 2em 0 1em;
	z-index: 2;

	display: flex;
	justify-content: flex-end;
`;

export const MainContainer = styled($Container)`
	height: unset;
	flex: 1;
	padding-bottom: 6.5em;
	z-index: 2;

	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;

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
	text-transform: capitalize;
	width: 100%;

	border-bottom: 1px solid #eee;
	padding-bottom: 0.5em;
	margin-bottom: 0.5em;
`;

export const PoemsList = styled.div`
	font-size: 1.125rem;
	line-height: 1.25;
	display: flex;
	flex-direction: column;
	gap: 1em;
	flex: 1;
`;

export const PoemsItem = styled.span`
	cursor: pointer;
	border-bottom: 1px solid #eee;
	padding-bottom: 0.5em;

	transition-property: transform color;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

	&:hover,
	&:active {
		color: violet;
	}
`;

export const HomeContactsContainer = ContactsContainer;
