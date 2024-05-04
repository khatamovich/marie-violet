import { $Menu, MenuItem } from "./Component.styled";
import menuData from "../../static/menu";

export default function Menu({ language }) {
	return (
		<$Menu>
			{menuData[language]?.map((menuItem) => (
				<MenuItem key={menuItem.path} to={menuItem.path}>
					{menuItem.label}
				</MenuItem>
			))}
		</$Menu>
	);
}
