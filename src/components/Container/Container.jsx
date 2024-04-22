import { $Container } from "./Component.styled";

export default function Container({ children, max }) {
	return <$Container $max={max}>{children}</$Container>;
}
