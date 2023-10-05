import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPostPage from "./pages/BlogPostPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import { categorys, blogposts } from "./utils/types";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="category/:Id" element={<CategoryPage />} />
        <Route path="blogpost/:Id" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
