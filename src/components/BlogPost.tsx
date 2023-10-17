import { NavLink } from "react-router-dom";
import "../css/desktop.css";
import "../css/tablet.css";
import "../css/mobile.css";
import { blogpost } from "../utils/types";
import { AppState, useAppSelector } from "../store/store";

interface props {
  blogpost: blogpost;
}

const BlogPost = (props: props) => {
  const commentss = (state: AppState) => {
    return state.post.comments;
  };

  const comment = useAppSelector(commentss);
  const filter = comment.filter((c) => c.postId === props.blogpost.id);
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
      <p>Kommentarer: {filter.length}</p>
    </div>
  );
};

export default BlogPost;
