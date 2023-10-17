import { NavLink, useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import profilepic from "../assets/blank-profile-picture-973460_640.png";
import "../css/desktop.css";
import { comment, values } from "../utils/types";
import { useAppSelector, AppState, useAppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { addComment } from "../store/blogpostSlice";
import CommentForm from "../components/CommentForm";

const BlogPostPage = () => {
  const [comments, setComments] = useState<comment[]>([]);
  const params = useParams<{ Id: string }>();
  const currentBlogs = (state: AppState) => {
    return state.post.posts;
  };
  const bloggposts = useAppSelector(currentBlogs);
  const blogpost = bloggposts.find((post) => post.id === Number(params.Id));
  console.log(blogpost);
  const currentCategorys = (state: AppState) => {
    return state.post.categories;
  };
  const categorys = useAppSelector(currentCategorys);
  const commentss = (state: AppState) => {
    return state.post.comments;
  };

  const comment = useAppSelector(commentss);

  useEffect(() => {
    if (comment && blogpost) {
      const filtred = comment.filter((c) => c.postId === blogpost.id);
      setComments(filtred);
    }
  }, [comment, blogpost]);

  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80-1">
        <div className="flex-row">
          <div className="column-80">
            {blogpost ? (
              <div className="content">
                <div className="blogpost">
                  <h1>{blogpost.title}</h1>

                  <p>{blogpost.date}</p>
                  <p>{blogpost.content}</p>
                  <h3>Kommentarer:</h3>

                  {comments ? (
                    comments.flatMap((comment) => (
                      <div key={comment.id}>
                        <h4>Namn:</h4>
                        <p>{comment.name}</p>
                        <h4>Kommentar:</h4>
                        <p>{comment.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className="blogpost">
                  <h3>Kommentera:</h3>
                  <CommentForm post={blogpost}></CommentForm>
                </div>
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
export default BlogPostPage;
