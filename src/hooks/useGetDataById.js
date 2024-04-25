import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useGetDataById = (jsonData, cutcount) => {
	const [data, setData] = useState(null);
	const { pathname } = useLocation();

	useEffect(() => {
		const selectedId = pathname.substring(cutcount);

		const findById = jsonData.find((item) => item.id == selectedId);

		setData(findById);

		return () => setData(null);
	}, [jsonData, pathname, cutcount]);

	return { data };
};
