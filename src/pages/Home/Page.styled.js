import styled from "styled-components";
import { $Container } from "../../components/Container/Component.styled";

export const MainContainer = styled($Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LangsContainer = styled($Container)`
	height: auto;

	position: fixed;
	top: 0;
	left: 0;

	font-size: 1.25rem;
	padding: 1.125em 1.5em;

	max-width: unset;
	width: 100%;
`;

export const ContactsContainer = styled(LangsContainer)`
	top: unset;
	bottom: 0;
	left: 50%;

	font-size: 1.5rem;
	padding: 1.5em;

	transform: translateX(-50%);

	width: 100%;
	max-width: max-content;
	padding: unset;

	background: var(--gradient-bg-primary);
	-webkit-box-shadow: rgba(255, 94, 255, 0.2) 36.740002px 41.990002px 500px
		115.470001px;
	box-shadow: rgba(255, 94, 255, 0.2) 36.740002px 41.990002px 500px
		115.470001px;
	border-radius: 1em 1em 0 0;

	font-size: 1rem;
	padding: 0.5em 1em;
`;
