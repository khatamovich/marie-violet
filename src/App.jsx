import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Poetry from "./pages/Poetry/Poetry";
import PoetryDetails from "./pages/PoetryDetails/PoetryDetails";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/poetry/:id" element={<PoetryDetails />} />
    </Routes>
  );
}
