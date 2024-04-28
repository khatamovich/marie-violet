import styled from "styled-components";
import { Link } from "react-router-dom";

export const $Menu = styled.nav`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	gap: 0.75em;

	font-size: 3.75rem;
	line-height: 1;

	position: relative;
	z-index: 999;

	transform: translateY(-3vh);

	@media (width >= 1000px) {
		font-size: 4.75rem;
	}

	@media (height <= 475px) {
		font-size: 2.75rem;
	}

	@media (height <= 328px) {
		font-size: 2rem;
	}
`;

export const MenuItem = styled(Link)`
	color: inherit;
	letter-spacing: 0.1em;

	transition-property: transform;
	transition-duration: 0.3s;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

	// Scale up on hover
	&:hover {
		transform: translateZ(0) scale(1.1);
	}

	@media (width >= 1000px) {
		letter-spacing: 0.2em;
	}
`;
