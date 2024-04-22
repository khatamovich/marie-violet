import styled from "styled-components";

export const $Container = styled.div`
	height: inherit;
	width: 90%;
	max-width: ${({ $max }) => ($max ? $max + "px" : "1024px")};
	margin: 0 auto;
`;
