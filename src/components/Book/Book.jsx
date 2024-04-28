import {
	$Book,
	Body,
	ImageContainer,
	TextContainer,
	ActionsContainer,
	Title,
	Description,
} from "./Component.styled";

export default function Book({ coverImage, title, description }) {
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
					<button>Preview</button>
					<button>Download</button>
				</ActionsContainer>
			</Body>
		</$Book>
	);
}
