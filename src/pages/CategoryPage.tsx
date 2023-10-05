import { NavLink } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../css/desktop.css";
import { blogposts, category, categorys } from "../utils/types";
import { useParams } from "react-router-dom";
interface props {
  category: category;
}
const CategoryPage = () => {
  const params = useParams<{ Id: string }>();
  const category = categorys.find(
    (category) => category.id === Number(params.Id)
  );
  const blogsByCategory = blogposts.filter(
    (element) => element.category.name === category?.name
  );
  const years = blogposts.map((element) => element.date.substring(0, 4));
  const unique = [new Set(years)];
  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80-1">
        <Header></Header>
        <NavBar></NavBar>
        <div className="flex-row">
          <div className="column-80">
            <div className="content">
              {blogsByCategory.flatMap((element) => (
                <ul>
                  <li key={element.title}>
                    <BlogPost blogpost={element}></BlogPost>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="column-20">
            <div className="sidebar">
              <h3>Om mig</h3>
              <img src="" alt="bild" />
              <p>Namn</p>
              <p>Lite information om mig</p>
              <h3>Senaste Inläggen</h3>
              {blogsByCategory.flatMap((element) => (
                <ul>
                  <li key={element.title}>
                    <NavLink
                      to={`/blogpost/${element.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p>{element.title}</p>
                    </NavLink>
                  </li>
                </ul>
              ))}
              <h3>Kategorier</h3>
              {categorys.flatMap((element) => (
                <ul>
                  <li key={element.name}>
                    <NavLink
                      to={`/category/${element.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p>{element.name}</p>
                    </NavLink>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <div className="column-10"></div>
    </div>
  );
};
export default CategoryPage;
