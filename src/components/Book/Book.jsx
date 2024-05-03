import {
	$Book,
	Body,
	ImageContainer,
	TextContainer,
	ActionsContainer,
	Title,
	Description,
} from "./Component.styled";
import { useTranslation } from "react-i18next";

export default function Book({ coverImage, title, description }) {
	const { t } = useTranslation("common");

	return (
		<$Book>
			<ImageContainer>
				<img src={coverImage} alt={title} />
			</ImageContainer>

			<Body>
				<TextContainer>
					<Title>{title}</Title>

					<Description>{description}</Description>
				</TextContainer>

				<ActionsContainer>
					<button>{t("preview")}</button>
				</ActionsContainer>
			</Body>
		</$Book>
	);
}
