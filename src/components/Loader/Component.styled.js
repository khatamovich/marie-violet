import styled from "styled-components";
import bgPrimary from "../../assets/images/fire-fox.jpg";

export const $Loader = styled.div`
	height: 100vh;
	background: url(${bgPrimary}) center / cover no-repeat;

	display: flex;
	align-items: center;
	justify-content: center;
`;
