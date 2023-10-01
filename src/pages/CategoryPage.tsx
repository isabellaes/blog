import { NavLink } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../css/desktop.css";
import { blogposts, category, categorys } from "../utils/types";
interface props {
  category: category;
}
const CategoryPage = (props: props) => {
  const blogsByCategory = blogposts.filter(
    (element) => element.category.name === props.category.name
  );
  const years = blogposts.map((element) => element.date.substring(0, 4));
  const unique = [new Set(years)];
  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80">
        <Header></Header>
        <NavBar></NavBar>
        <div className="flex-row">
          <div className="column-80">
            <div className="content">
              {blogsByCategory.flatMap((element) => (
                <BlogPost blogpost={element}></BlogPost>
              ))}
            </div>
          </div>
          <div className="column-20">
            <div className="sidebar">
              <h3>Om mig</h3>
              <p>Kalle Anka</p>
              <p>hej hej jag heter kalle o är en anka tack för mig</p>
              <h3>Senaste Inläggen</h3>
              {blogsByCategory.flatMap((element) => (
                <NavLink to={"/" + element.title}>
                  <p>{element.title}</p>
                </NavLink>
              ))}
              <h3>Kategorier</h3>
              {categorys.flatMap((element) => (
                <NavLink to={"/" + element.name}>
                  <p>{element.name}</p>
                </NavLink>
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
