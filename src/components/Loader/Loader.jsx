import { PuffLoader } from "react-spinners";
import { $Loader } from "./Component.styled";

export default function Loader({ text }) {
	if (text)
		return (
			<$Loader>
				<div class="loading loading01">
					<span>M</span>
					<span>a</span>
					<span>r</span>
					<span>i</span>
					<span>e</span>
					<span></span>
					<span>V</span>
					<span>i</span>
					<span>o</span>
					<span>l</span>
					<span>e</span>
					<span>t</span>
				</div>
			</$Loader>
		);

	return (
		<$Loader>
			<PuffLoader color="white" />
		</$Loader>
	);
}
