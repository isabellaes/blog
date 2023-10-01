import "../css/desktop.css";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import { blogposts, categorys } from "../utils/types";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [blogpost, setBlogposts] = useState(blogposts);
  const years = blogposts.map((element) => element.date.substring(0, 4));
  const unique = [new Set(years)];
  console.log(unique);

  function sortPosts(year: Set<string>) {
    const blogs = blogposts.filter(
      (post) => post.date.substring(0, 4) === year.values.toString()
    );
    return setBlogposts(blogs);
  }

  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80">
        <Header></Header>
        <NavBar></NavBar>
        <div className="flex-row">
          <div className="column-80">
            <div className="content">
              {blogpost.flatMap((element) => (
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
              {blogposts.flatMap((element) => (
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
              <h3>Arkiv</h3>
              {unique.flatMap((element) => (
                <button onClick={() => sortPosts(element)}>{element}</button>
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
