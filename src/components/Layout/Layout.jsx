import { $Layout } from "./Component.styled";

export default function Layout({ children, animateBg, bgColor, bg }) {
	return (
		<$Layout $animateBg={animateBg} $bgColor={bgColor} $bg={bg}>
			<main>{children}</main>
		</$Layout>
	);
}
