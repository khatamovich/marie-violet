import { $Contacts, ContactsItem } from "./Component.styled";

// Icons
import { MdOutlineEmail } from "react-icons/md";
import { LiaTelegram, LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

export default function Contacts() {
	return (
		<$Contacts>
			{/*Telegram*/}
			<ContactsItem href="https://t.me/marie_violet_art">
				<LiaTelegram />
				@marie_violet_art
			</ContactsItem>

			{/*Instagram*/}
			<ContactsItem href="https://www.instagram.com/marie_violet_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
				<FaInstagram />
				marie_violet_
			</ContactsItem>

			{/*email*/}
			<ContactsItem href="mailto:writer.meviolet@gmail.com">
				<MdOutlineEmail />
				writer.meviolet@gmail.com
			</ContactsItem>
		</$Contacts>
	);
}
