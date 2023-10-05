import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../css/desktop.css";
import { blogposts } from "../utils/types";

const BlogPostPage = () => {
  const params = useParams<{ Id: string }>();
  const blogpost = blogposts.find((post) => post.id === Number(params.Id));
  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80-1">
        <Header></Header>
        <NavBar></NavBar>
        <div className="flex-row">
          <div className="column-80">
            {blogpost ? (
              <div className="content">
                <BlogPost blogpost={blogpost}></BlogPost>

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
              <img src="" alt="bild" />
              <p>Namn</p>
              <p>Lite information om mig</p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <div className="column-10"></div>
    </div>
  );
};
export default BlogPostPage;
