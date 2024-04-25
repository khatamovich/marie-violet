import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Poetry from "./pages/Poetry/Poetry";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/poetry" element={<Poetry />} />
    </Routes>
  );
}
