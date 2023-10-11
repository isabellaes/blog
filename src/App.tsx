import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPostPage from "./pages/BlogPostPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ArchivePage from "./pages/ArchivePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="category/:Id" element={<CategoryPage />} />
        <Route path="blogpost/:Id" element={<BlogPostPage />} />
        <Route path="archive/:Id" element={<ArchivePage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
