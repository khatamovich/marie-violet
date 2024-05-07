import {
	PoetryPage,
	PoetryPageTitle,
	HeaderContainer,
	MainContainer,
	HomeContactsContainer,
	BooksContainer,
} from "./Page.styled";
import { Helmet } from "react-helmet";

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
		t,
		i18n: { language },
	} = useTranslation("common");

	return (
		<PoetryPage $bg={bgPrimary}>
			{/*SEO*/}
			<Helmet>
				<title>{t("books-page.SEO.title")}</title>
				<meta
					name="description"
					content={t("books-page.SEO.description")}
				/>
				<meta name="keywords" content={t("books-page.SEO.keywords")} />
				<meta name="author" content={t("author")} />
				<link rel="canonical" href={t("books-page.SEO.canonicalURL")} />
			</Helmet>

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
