import styled from "styled-components";

export const $Langs = styled.div`
	display: flex;
	justify-content: space-between;

	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
`;

export const Lang = styled.div`
	text-transform: uppercase;
	letter-spacing: 0.1em;
	line-height: 1;

	width: 3em;
	height: 3em;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 100%;
	border: 0.1em solid transparent;
	background-color: ${({ $bgColor }) =>
		$bgColor || "rgba(191, 50, 255, 0.75)"};
	-webkit-box-shadow: rgba(255, 94, 255, 0.2) 36.74px 41.99px 320.17px 115.47px;
	box-shadow: rgba(255, 94, 255, 0.2) 36.74px 41.99px 320.17px 115.47px;

	cursor: pointer;

	transition-property: transform border-color;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

	// Set border color on hover and scale a bit
	&:hover {
		transform: translateZ(0) scale(1.05);
		border-color: white;
	}
`;
