import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./components/Loader/Loader";

// Pages
import Home from "./pages/Home/Home";
import Poetry from "./pages/Poetry/Poetry";
import PoetryDetails from "./pages/PoetryDetails/PoetryDetails";
import Books from "./pages/Books/Books";
import Gallery from "./pages/Gallery/Gallery";

export default function App() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 500);
  }, [language, pathname]);

  if (isLoading) return <Loader text={1} />;

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/poetry/:id" element={<PoetryDetails />} />
      <Route path="/books" element={<Books />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
