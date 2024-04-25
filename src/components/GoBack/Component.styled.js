import styled from "styled-components";

export const $GoBack = styled.button`
	font-size: inherit;
	background: transparent;
	border: none;
	padding: 0.25em 0.5em;
	border-radius: 0.75em;
	background: var(--gradient-bg-primary);
	cursor: pointer;

	&:hover {
		opacity: 0.75;
	}

	svg {
		color: white;
		font-size: 1.5rem;
	}
`;
