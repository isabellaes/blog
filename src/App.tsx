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
        {categorys.flatMap((element) => (
          <Route
            path={element.name}
            element={<CategoryPage category={element} />}
          />
        ))}
        {blogposts.flatMap((element) => (
          <Route
            path={element.title}
            element={<BlogPostPage post={element} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
