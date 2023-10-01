import { NavLink } from "react-router-dom";
import "../css/desktop.css";
import { blogpost } from "../utils/types";

interface props {
  blogpost: blogpost;
}

const BlogPost = (props: props) => {
  return (
    <div className="blogpost">
      <NavLink to={"/" + props.blogpost.title}>
        <h1>{props.blogpost.title}</h1>
      </NavLink>

      <p>{props.blogpost.date}</p>
      <p>{props.blogpost.content}</p>
      {props.blogpost.comments ? (
        <p>Kommentarer: {props.blogpost.comments.length}</p>
      ) : (
        <p>Kommentarer: 0</p>
      )}
    </div>
  );
};

export default BlogPost;
