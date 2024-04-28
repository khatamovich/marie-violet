import styled from "styled-components";

export const $Book = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3em;

	@media (width >= 768px) or (height <= 475px) {
		flex-direction: row;
		align-items: flex-start;
	}
`;

export const Body = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImageContainer = styled.div`
	margin-bottom: 0.75em;
	img {
		object-fit: containe;
		max-width: 100%;
	}

	@media (width >= 768px) {
		width: 100%;
		max-width: 17.1875rem;
		flex-shrink: 0;

		img {
			width: 100%;
			height: 100%;
		}
	}
`;

export const TextContainer = styled.div`
	flex: 1;
`;

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
	line-height: 1;
	margin-bottom: 0.5em;
`;

export const Description = styled.p`
	white-space: pre-line;
`;
