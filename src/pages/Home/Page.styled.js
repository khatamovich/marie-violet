import styled from "styled-components";

export const Content = styled.div`
	height: inherit;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LangsContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	font-size: 1.25rem;
	padding: 1.125em 1.5em;

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

	background: linear-gradient(
		0deg,
		rgba(98, 0, 112, 0.882) 41%,
		rgba(171, 0, 173, 0.855) 100%
	);
	-webkit-box-shadow: rgba(255, 94, 255, 0.2) 36.740002px 41.990002px 500px
		115.470001px;
	box-shadow: rgba(255, 94, 255, 0.2) 36.740002px 41.990002px 500px
		115.470001px;
	border-radius: 1em 1em 0 0;

	font-size: 1rem;
	padding: 0.5em 1em;
`;
