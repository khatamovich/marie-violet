import { $Menu, MenuItem } from "./Component.styled";

export default function Menu() {
	return (
		<$Menu>
			<MenuItem to="/poetry">Poetry</MenuItem>
			<MenuItem to="/books">Books</MenuItem>
			<MenuItem to="/gallery">Gallery</MenuItem>
		</$Menu>
	);
}
