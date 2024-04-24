import styled from "styled-components";

export const $Background = styled.div`
	background-color: ${({ $bgColor }) => $bgColor || "transparent"};
	background: ${({ $bg }) => `url(${$bg}) center / cover no-repeat`};
	display: flex;
	flex-direction: column;

	@keyframes slideBackground {
		0% {
			background-position: 0% 50%;
		}

		100% {
			background-position: 75% 50%;
		}
	}

	animation: ${({ $animateBg }) =>
		$animateBg && "slideBackground 2s ease-in-out forwards;"};
	main {
		flex: 1;
		height: inherit;
	}
`;
