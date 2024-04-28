import styled from "styled-components";

export const $Background = styled.div`
	height: inherit;
	background-color: ${({ $bgColor }) => $bgColor || "transparent"};
	background: ${({ $bg }) => $bg && `url(${$bg}) center / cover no-repeat`};
	display: flex;
	flex-direction: column;

	@keyframes slideBackground {
		0% {
			background-position: 75% 50%;
		}

		100% {
			background-position: 15% 50%;
			opacity: 1;
		}
	}

	animation: ${({ $animateBg }) =>
		$animateBg && "slideBackground 2s ease-in-out forwards reverse"};
	main {
		flex: 1;
		height: inherit;
	}
`;
