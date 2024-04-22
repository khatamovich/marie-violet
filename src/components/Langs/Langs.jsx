import { $Langs, Lang } from "./Component.styled";

export default function Langs({ bgColor }) {
	return (
		<$Langs>
			<Lang $bgColor={bgColor}>en</Lang>
			<Lang $bgColor={bgColor}>ru</Lang>
		</$Langs>
	);
}
