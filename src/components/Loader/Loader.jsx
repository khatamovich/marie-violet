import { PuffLoader } from "react-spinners";
import { $Loader } from "./Component.styled";

export default function Loader() {
	return (
		<$Loader>
			<PuffLoader color="white" />
		</$Loader>
	);
}
