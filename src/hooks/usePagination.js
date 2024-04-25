import { useState } from "react";

export const usePagination = (items = [], itemsPerPage = 2) => {
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items?.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};

	return { currentItems, handlePageClick, pageCount };
};
