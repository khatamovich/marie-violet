import { $Langs, Lang } from "./Component.styled";

export default function Langs({ bg }) {
	return (
		<$Langs>
			<Lang $bg={bg}>en</Lang>
			<Lang $bg={bg}>ru</Lang>
		</$Langs>
	);
}
