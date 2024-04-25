import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Poems from "./pages/Poems/Poems";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/poems" element={<Poems />} />
    </Routes>
  );
}
