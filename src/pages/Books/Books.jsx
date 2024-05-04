import {
	PoetryPage,
	PoetryPageTitle,
	HeaderContainer,
	MainContainer,
	HomeContactsContainer,
	BooksContainer,
} from "./Page.styled";

// Simple components
import GoBack from "../../components/GoBack/GoBack";
import Contacts from "../../components/Contacts/Contacts";
import Book from "../../components/Book/Book";

// Data - books
import books from "../../static/books";

// Background image
import bgPrimary from "../../assets/images/fire-fox.jpg";
import { useTranslation } from "react-i18next";

export default function Books({ title }) {
	if (!books || books.length < 1) return null;
	const {
		i18n: { language },
	} = useTranslation();

	return (
		<PoetryPage $bg={bgPrimary}>
			<HeaderContainer>
				<GoBack />
			</HeaderContainer>

			<MainContainer>
				<PoetryPageTitle>{title || "books"}</PoetryPageTitle>

				<BooksContainer>
					{books[language]?.map((book) => (
						<Book
							key={book.id}
							title={book.name}
							description={book.annotation}
							coverImage={book.coverImage}
							previewURL={book.previewURL}
						/>
					))}
				</BooksContainer>
			</MainContainer>

			<HomeContactsContainer>
				<Contacts />
			</HomeContactsContainer>
		</PoetryPage>
	);
}
