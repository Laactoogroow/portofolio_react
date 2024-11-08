import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailGallery from "./pages/DetailGallery";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery/:id" element={<DetailGallery />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
