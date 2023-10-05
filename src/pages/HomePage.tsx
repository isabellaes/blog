import "../css/desktop.css";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import { blogposts, categorys } from "../utils/types";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import profilepic from "../assets/blank-profile-picture-973460_640.png";

const HomePage = () => {
  const [blogpost, setBlogposts] = useState(blogposts);
  const years = blogposts.map((element) => element.date.substring(0, 4));
  const unique = [new Set(years)];
  const values: string[] = [];
  const split = unique[0].forEach((entry) => values.push(entry));

  function sortPosts(year: string) {
    const blogs = blogposts.filter(
      (post) => post.date.substring(0, 4) === year
    );

    return setBlogposts(blogs);
  }

  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80-1">
        <Header></Header>
        <NavBar></NavBar>
        <div className="flex-row">
          <div className="column-80">
            <div className="content">
              {blogpost.flatMap((element) => (
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
                    <button onClick={() => sortPosts(element)}>
                      {element}
                    </button>
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

export default HomePage;
