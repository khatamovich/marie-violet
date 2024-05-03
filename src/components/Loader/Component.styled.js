import styled from "styled-components";
import bgPrimary from "../../assets/images/fire-fox.jpg";

export const $Loader = styled.div`
	height: 100vh;
	background: url(${bgPrimary}) center / cover no-repeat;

	display: flex;
	align-items: center;
	justify-content: center;

	// Loader
	/* common */
	.loading {
		font-size: 32px;
		font-family: "Montserrat", sans-serif;
		font-weight: 800;
		text-align: center;

		span {
			display: inline-block;
			margin: 0 0.2em;
		}
	}

	.loading01 {
		span {
			animation: loading01 1.4s infinite alternate;
			@for $i from 0 through 6 {
				&:nth-child(#{$i + 1}) {
					animation-delay: #{$i * 0.1}s;
				}
			}
		}
	}
	@keyframes loading01 {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	/* code #2 */
	.loading02 {
		span {
			animation: loading02 1.2s infinite alternate;
			@for $i from 1 through 6 {
				&:nth-child(#{$i + 1}) {
					animation-delay: #{$i * 0.2}s;
				}
			}
		}
	}
	@keyframes loading02 {
		0% {
			filter: blur(0);
			opacity: 1;
		}
		100% {
			filter: blur(5px);
			opacity: 0.2;
		}
	}

	/* code #3 */
	.loading03 {
		span {
			margin: 0 -0.075em;
			animation: loading03 0.7s infinite alternate;
			@for $i from 1 through 6 {
				&:nth-child(#{$i + 1}) {
					animation-delay: #{$i * 0.1}s;
				}
			}
		}
	}
	@keyframes loading03 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0.8);
		}
	}

	/* code #4 */
	.loading04 {
		span {
			animation: loading04 0.7s infinite;
			@for $i from 1 through 6 {
				&:nth-child(#{$i + 1}) {
					animation-delay: #{$i * 0.1}s;
				}
			}
		}
	}
	@keyframes loading04 {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(15px);
		}
	}

	/* code #5 */
	.loading05 {
		perspective: 1000px;
		span {
			transform-origin: 50% 50% -25px;
			transform-style: preserve-3d;
			animation: loading05 1.6s infinite;
			@for $i from 1 through 6 {
				&:nth-child(#{$i + 1}) {
					animation-delay: #{$i * 0.1}s;
				}
			}
		}
	}
	@keyframes loading05 {
		0% {
			transform: rotateX(-360deg);
		}
		70% {
			transform: rotateX(0);
		}
	}

	/* code #6 */
	.loading06 {
		span {
			position: relative;
			color: rgba(#000, 0.2);
			&::after {
				position: absolute;
				top: 0;
				left: 0;
				content: attr(data-text);
				color: #fff;
				opacity: 0;
				transform: rotateY(-90deg);
				animation: loading06 4s infinite;
			}
			@for $i from 1 through 6 {
				&:nth-child(#{$i + 1})::after {
					animation-delay: #{$i * 0.2}s;
				}
			}
		}
	}
	@keyframes loading06 {
		0%,
		75%,
		100% {
			transform: rotateY(-90deg);
			opacity: 0;
		}
		25%,
		50% {
			transform: rotateY(0);
			opacity: 1;
		}
	}

	/* code #7 */
	.loading07 {
		span {
			position: relative;
			color: rgba(#000, 0.2);
			&::after {
				position: absolute;
				top: 0;
				left: 0;
				content: attr(data-text);
				color: #fff;
				opacity: 0;
				transform: scale(1.5);
				animation: loading07 3s infinite;
			}
			@for $i from 1 through 6 {
				&:nth-child(#{$i + 1})::after {
					animation-delay: #{$i * 0.1}s;
				}
			}
		}
	}
	@keyframes loading07 {
		0%,
		75%,
		100% {
			transform: scale(1.5);
			opacity: 0;
		}
		25%,
		50% {
			transform: scale(1);
			opacity: 1;
		}
	}

	/* code #8 */
	.loading08 {
		span {
			position: relative;
			color: rgba(#000, 0.2);
			animation: loading08-parent 5s infinite;
			&::after {
				position: absolute;
				top: 0;
				left: 0;
				content: attr(data-text);
				color: #fff;
				opacity: 0;
				animation: loading08-child 5s infinite;
			}
			@for $i from 1 through 6 {
				&:nth-child(#{$i + 1})::after {
					animation-delay: #{$i * 0.2}s;
				}
			}
		}
	}

	@keyframes loading08-parent {
		0%,
		35%,
		100% {
			color: rgba(#000, 0.2);
		}
		60%,
		80% {
			color: #fff;
		}
	}
	@keyframes loading08-child {
		0% {
			opacity: 1;
		}
		25%,
		100% {
			opacity: 0;
		}
	}
`;
