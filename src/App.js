import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopAlbums from "./pages/TopAlbums";
import AlbumDetails from "./pages/AlbumDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<TopAlbums />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
