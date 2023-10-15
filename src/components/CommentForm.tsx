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

  function onSubmit() {
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
    <div className="commentForm">
      <form id="commentForm" onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default CommentForm;
