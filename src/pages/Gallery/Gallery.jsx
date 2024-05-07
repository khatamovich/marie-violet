import {
	GalleryPage,
	HeaderContainer,
	MainContainer,
	HomeContactsContainer,
} from "./Page.styled";
import { Helmet } from "react-helmet";

import { ImageGallery } from "react-image-grid-gallery";
import galleryData from "../../static/gallery";

// Simple components
import GoBack from "../../components/GoBack/GoBack";
import Contacts from "../../components/Contacts/Contacts";

// Background image
import bgPrimary from "../../assets/images/fire-verses.jpg";
import { useTranslation } from "react-i18next";

export default function Gallery() {
	const { t } = useTranslation("common");

	return (
		<GalleryPage $bg={bgPrimary}>
			{/*SEO*/}
			<Helmet>
				<title>{t("gallery-page.SEO.title")}</title>
				<meta
					name="description"
					content={t("gallery-page.SEO.description")}
				/>
				<meta name="keywords" content={t("gallery-page.SEO.keywords")} />
				<meta name="author" content={t("author")} />
				<link rel="canonical" href={t("gallery-page.SEO.canonicalURL")} />
			</Helmet>

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
