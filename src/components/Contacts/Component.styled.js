import styled from "styled-components";

export const $Contacts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap-reverse;

	gap: 0.5em 1.25em;
`;

export const ContactsItem = styled.a`
	display: flex;
	align-items: center;
	gap: 0.5em;

	cursor: pointer;
`;
