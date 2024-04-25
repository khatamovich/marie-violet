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

// Simple components
import GoBack from "../../components/GoBack/GoBack";
import Contacts from "../../components/Contacts/Contacts";
import ReactPaginate from "react-paginate";
import { usePagination } from "../../hooks/usePagination";

// Data - poems
import poems from "../../static/poems";

// Background image
import bgPrimary from "../../assets/images/fire-verses.jpg";

export default function Poetry({ title }) {
	const { currentItems, pageCount, handlePageClick } = usePagination(
		poems,
		10,
	);

	return (
		<Page $bg={bgPrimary}>
			<HeaderContainer>
				<GoBack />
			</HeaderContainer>

			<MainContainer>
				<Title>{title || "Poetry"}</Title>

				{currentItems && currentItems.length >= 1 ? (
					<PoemsList>
						{currentItems.map((poem, i) => (
							<PoemsItem key={`poem-${i}`}>{poem.name.en}</PoemsItem>
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
