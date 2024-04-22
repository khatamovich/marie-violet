import styled from "styled-components";
import { Link } from "react-router-dom";

export const $Menu = styled.nav`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	gap: 0.5em;

	font-size: 4.5rem;
	line-height: 1;

	position: relative;
	z-index: 999;

	transform: translateY(-3vh);
`;

export const MenuItem = styled(Link)`
	color: inherit;
	letter-spacing: 0.05em;

	transition-property: transform;
	transition-duration: 0.3s;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

	// Scale up on hover
	&:hover {
		transform: translateZ(0) scale(1.1);
	}
`;
