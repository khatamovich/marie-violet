import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
