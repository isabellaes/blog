import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../css/desktop.css";
import { blogpost } from "../utils/types";
interface props {
  post: blogpost;
}
const BlogPostPage = (props: props) => {
  return (
    <div className="container">
      <div className="column-10"></div>
      <div className="column-80">
        <Header></Header>
        <NavBar></NavBar>
        <div className="flex-row">
          <div className="column-80">
            <div className="content">
              <BlogPost blogpost={props.post}></BlogPost>
              {props.post.comments ? (
                props.post.comments.flatMap((comment) => (
                  <div>
                    <p>{comment.name}</p>
                    <p>{comment.comment}</p>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
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
