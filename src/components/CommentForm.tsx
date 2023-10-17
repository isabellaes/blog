import { useState } from "react";
import { blogpost, comment } from "../utils/types";
import { useDispatch } from "react-redux";
import { addComment } from "../store/blogpostSlice";
import "../css/desktop.css";

interface props {
  post: blogpost;
}
const CommentForm = (props: props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let comment: comment = {
      id: Math.random(),
      postId: props.post.id,
      name: name,
      email: email,
      comment: message,
    };
    console.log("dispatch");
    dispatch(addComment({ comment: comment }));
  }
  return (
    <form id="commentForm" onSubmit={onSubmit}>
      <div className="commentForm">
        <label>Namn:</label>
        <input
          type="text"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="input"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Kommentar:</label>
        <input
          type="text"
          className="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Skicka</button>
      </div>
    </form>
  );
};

export default CommentForm;
