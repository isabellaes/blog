import "../css/desktop.css";
import BlogPost from "../components/BlogPost";
import { blogposts, categorys, values } from "../utils/types";
import { NavLink } from "react-router-dom";
import profilepic from "../assets/blank-profile-picture-973460_640.png";

const HomePage = () => {
  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80-1">
        <div className="flex-row">
          <div className="column-80">
            <div className="content">
              {blogposts.flatMap((element) => (
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
              <img src={profilepic} alt="bild" className="profilepic" />
              <p>Namn</p>
              <p>Lite information om mig</p>
              <h3>Senaste Inläggen</h3>
              {blogposts.flatMap((element) => (
                <ul>
                  <li key={element.id}>
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
                  <li key={element.id}>
                    <NavLink
                      to={`/category/${element.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p>{element.name}</p>
                    </NavLink>
                  </li>
                </ul>
              ))}
              <h3>Arkiv</h3>
              {values.flatMap((element) => (
                <ul>
                  <li key={element}>
                    <NavLink
                      to={`/archive/${element}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p>{element}</p>
                    </NavLink>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="column-10"></div>
    </div>
  );
};

export default HomePage;
