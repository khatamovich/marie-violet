import styled from "styled-components";

export const $Container = styled.div`
	height: inherit;
	width: 90%;
	max-width: ${({ $max }) => ($max ? $max + "px" : "1000px")};
	margin: 0 auto;
`;
