import styled from "styled-components";

export const $Book = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImageContainer = styled.div`
	margin-bottom: 0.75em;
	img {
		display: block;
		max-width: 100%;
	}
`;

export const TextContainer = styled.div``;

export const ActionsContainer = styled.div`
	margin-top: 2em;
	display: flex;
	gap: 2.75em;

	button {
		font-size: 1.5rem;
		font-family: Lancelot, Inter, Arial, serif;
		border: none;
		background: transparent;

		color: inherit;
		cursor: pointer;

		display: flex;
		align-items: center;
		gap: 0.3em;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Title = styled.span`
	font-size: 2.75rem;
	letter-spacing: 0.1rem;
	font-family: Lancelot, Inter, Arial, serif;
	display: block;
`;

export const Description = styled.p`
	white-space: pre-line;
`;
