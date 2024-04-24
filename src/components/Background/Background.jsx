import { $Background } from "./Component.styled";

export default function Background({ children, animateBg, bgColor, bg }) {
	return (
		<$Background $animateBg={animateBg} $bg={bg} $bgColor={bgColor}>
			<main>{children}</main>
		</$Background>
	);
}
