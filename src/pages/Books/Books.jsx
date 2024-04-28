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
import bgPrimary from "../../assets/images/fire-verses.jpg";

export default function Books({ title }) {
	if (!books || books.length < 1) return null;

	return (
		<PoetryPage $bg={bgPrimary}>
			<HeaderContainer>
				<GoBack />
			</HeaderContainer>

			<MainContainer>
				<PoetryPageTitle>{title || "books"}</PoetryPageTitle>

				<BooksContainer>
					{books.en?.map((book) => (
						<Book
							key={book.id}
							title={book.name.en}
							description={book.annotation.en.substring(0, 400)}
							coverImage={book.coverImage}
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
