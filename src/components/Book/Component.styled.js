import styled from "styled-components";

export const $Book = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75em;

	@media (width >= 768px) or (height <= 475px) {
		flex-direction: row;
		gap: 2em;
	}
`;

export const Body = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImageContainer = styled.div`
	margin-bottom: 0.75em;
	align-self: flex-start;

	img {
		display: block;
		object-fit: contain;
		max-width: 100%;
	}

	@media (width >= 768px) or (height <= 475px) {
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
	margin-top: 2.75em;
	display: flex;
	gap: 2em;
	transform: translateY(-0.5rem);

	button {
		font-size: 1.25rem;
		font-family: "EB Garamond", Inter, Arial, serif;
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
	font-size: 2.25rem;
	letter-spacing: 0.1em;
	font-family: "EB Garamond", Inter, Arial, serif;
	display: block;
	line-height: 1;
	margin-bottom: 0.25em;

	@media (width >= 768px) {
		font-size: 3.75rem;
	}
`;

export const Description = styled.p`
	white-space: pre-line;
	font-size: 1.125rem;
`;
