import { NavLink, useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import profilepic from "../assets/blank-profile-picture-973460_640.png";
import "../css/desktop.css";
import { values } from "../utils/types";
import { useAppSelector } from "../store/selector";
import { RootState } from "../store/store";
import CommentForm from "../components/CommentForm";

const BlogPostPage = () => {
  const params = useParams<{ Id: string }>();
  const currentBlogs = (state: RootState) => {
    return state.post.posts;
  };
  const bloggposts = useAppSelector(currentBlogs);
  const blogpost = bloggposts.find((post) => post.id === Number(params.Id));
  const currentCategorys = (state: RootState) => {
    return state.post.categories;
  };
  const categorys = useAppSelector(currentCategorys);
  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80-1">
        <div className="flex-row">
          <div className="column-80">
            {blogpost ? (
              <div className="content">
                <BlogPost blogpost={blogpost}></BlogPost>
                <p>Kommentera:</p>
                <CommentForm post={blogpost}></CommentForm>
                {blogpost.comments ? (
                  blogpost.comments.flatMap((comment) => (
                    <div>
                      <h3>Kommentarer:</h3>
                      <p>Namn:</p>
                      <p>{comment.name}</p>
                      <p>Kommentar:</p>
                      <p>{comment.comment}</p>
                    </div>
                  ))
                ) : (
                  <p></p>
                )}
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div className="column-20">
            <div className="sidebar">
              <h3>Om mig</h3>
              <img src={profilepic} alt="bild" className="profilepic" />
              <p>Namn</p>
              <p>Lite information om mig</p>
              <h3>Senaste Inläggen</h3>
              {bloggposts.flatMap((element) => (
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
export default BlogPostPage;
