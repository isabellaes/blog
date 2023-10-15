import { NavLink } from "react-router-dom";
import "../css/desktop.css";
import { blogpost } from "../utils/types";

interface props {
  blogpost: blogpost;
}

const BlogPost = (props: props) => {
  return (
    <div className="blogpost">
      <NavLink
        to={`/blogpost/${props.blogpost.id}`}
        style={{ textDecoration: "none" }}
      >
        <h1>{props.blogpost.title}</h1>
      </NavLink>

      <p>{props.blogpost.date}</p>
      <p>{props.blogpost.content}</p>
    </div>
  );
};

export default BlogPost;
