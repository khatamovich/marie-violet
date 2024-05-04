import {
	GalleryPage,
	HeaderContainer,
	MainContainer,
	HomeContactsContainer,
} from "./Page.styled";

import { ImageGallery } from "react-image-grid-gallery";
import galleryData from "../../static/gallery";

// Simple components
import GoBack from "../../components/GoBack/GoBack";
import Contacts from "../../components/Contacts/Contacts";

// Background image
import bgPrimary from "../../assets/images/fire-verses.jpg";

export default function Gallery() {
	return (
		<GalleryPage $bg={bgPrimary}>
			<HeaderContainer>
				<GoBack />
			</HeaderContainer>

			<MainContainer>
				<ImageGallery
					imagesInfoArray={galleryData}
					columnCount={4}
					columnWidth={150}
					gapSize={14}
				/>
			</MainContainer>

			<HomeContactsContainer>
				<Contacts />
			</HomeContactsContainer>
		</GalleryPage>
	);
}
