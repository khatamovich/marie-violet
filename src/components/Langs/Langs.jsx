import { $Langs, Lang } from "./Component.styled";

const langs = [
	{
		code: "en",
	},
	{
		code: "ru",
	},
];

export default function Langs({ bg, onSwitchLang }) {
	return (
		<$Langs>
			{langs?.map((lang) => (
				<Lang
					onClick={() => onSwitchLang(lang.code)}
					key={lang.code}
					$bg={bg}
				>
					{lang.code}
				</Lang>
			))}
		</$Langs>
	);
}
