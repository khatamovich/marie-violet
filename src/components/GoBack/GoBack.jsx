import { $GoBack } from "./Component.styled";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function GoBack({}) {
	const navigate = useNavigate();

	return (
		<$GoBack onClick={() => navigate(-1)}>
			<IoArrowBackSharp />
		</$GoBack>
	);
}
