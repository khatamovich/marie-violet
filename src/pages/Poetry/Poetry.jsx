import {
	Page,
	HeaderContainer,
	MainContainer,
	Title,
	PoemsList,
	PoemsItem,
	HomeContactsContainer,
} from "./Page.styled";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import { PoemIcon } from "../../components/Icons";

// Simple components
import GoBack from "../../components/GoBack/GoBack";
import Contacts from "../../components/Contacts/Contacts";
import ReactPaginate from "react-paginate";
import { usePagination } from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";

// Data - poems
import poems from "../../static/poems";

// Background image
import bgPrimary from "../../assets/images/fire-verses.jpg";
import { useTranslation } from "react-i18next";

export default function Poetry() {
	const { currentItems, pageCount, handlePageClick } = usePagination(
		poems.en,
		10,
	);
	const navigate = useNavigate();
	const { t } = useTranslation("common");

	const onNavigate = (path) => {
		setTimeout(() => {
			navigate("/poetry/" + path);
			window.scrollTo({
				top: 0,
			});
		}, 300);
	};

	return (
		<Page $bg={bgPrimary}>
			<HeaderContainer>
				<GoBack />
			</HeaderContainer>

			<MainContainer>
				<Title>{t("poetry-page.title")}</Title>

				{currentItems && currentItems.length >= 1 ? (
					<PoemsList>
						{currentItems.map((poem, i) => (
							<PoemsItem
								onClick={() => onNavigate(poem.id)}
								key={`poem-${i}`}
							>
								<PoemIcon />
								{poem.name.en}
							</PoemsItem>
						))}
					</PoemsList>
				) : null}

				{/*Pagination start*/}
				{pageCount > 1 && (
					<ReactPaginate
						previousClassName="previous"
						nextClassName="next"
						className="pagination-container"
						pageClassName="pagination-item"
						breakLabel="..."
						nextLabel={<MdOutlineChevronRight size="32" />}
						onPageChange={handlePageClick}
						pageRangeDisplayed={0}
						pageCount={pageCount}
						previousLabel={<MdOutlineChevronLeft size="32" />}
						renderOnZeroPageCount={null}
					/>
				)}
				{/*Pagination End*/}
			</MainContainer>

			<HomeContactsContainer>
				<Contacts />
			</HomeContactsContainer>
		</Page>
	);
}
