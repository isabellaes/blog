import { NavLink } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import profilepic from "../assets/blank-profile-picture-973460_640.png";
import "../css/desktop.css";
import "../css/tablet.css";
import "../css/mobile.css";
import { values } from "../utils/types";
import { useParams } from "react-router-dom";
import { useAppSelector, AppState } from "../store/store";

const CategoryPage = () => {
  const params = useParams<{ Id: string }>();
  const currentBlogs = (state: AppState) => {
    return state.post.posts;
  };
  const bloggposts = useAppSelector(currentBlogs);

  const currentCategorys = (state: AppState) => {
    return state.post.categories;
  };
  const categorys = useAppSelector(currentCategorys);
  const category = categorys.find(
    (category) => category.id === Number(params.Id)
  );
  const blogsByCategory = bloggposts.filter(
    (element) => element.category.name === category?.name
  );

  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80-1">
        <div className="flex-row">
          <div className="column-80">
            <div className="content">
              {blogsByCategory.flatMap((element) => (
                <BlogPost blogpost={element} key={element.id}></BlogPost>
              ))}
            </div>
          </div>
          <div className="column-20">
            <div className="sidebar">
              <h3>Om mig</h3>
              <img src={profilepic} alt="bild" className="profilepic" />
              <p>Namn</p>
              <p>Lite information om mig</p>
              <h3>Senaste Inläggen</h3>
              {blogsByCategory.flatMap((element) => (
                <NavLink
                  to={`/blogpost/${element.id}`}
                  style={{ textDecoration: "none" }}
                  key={element.id}
                >
                  <p>{element.title}</p>
                </NavLink>
              ))}
              <h3>Kategorier</h3>
              {categorys.flatMap((element) => (
                <NavLink
                  to={`/category/${element.id}`}
                  style={{ textDecoration: "none" }}
                  key={element.id}
                >
                  <p>{element.name}</p>
                </NavLink>
              ))}
              <h3>Arkiv</h3>
              {values.flatMap((element) => (
                <NavLink
                  to={`/archive/${element}`}
                  style={{ textDecoration: "none" }}
                  key={element}
                >
                  <p>{element}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="column-10"></div>
    </div>
  );
};
export default CategoryPage;
