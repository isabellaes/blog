import { useState } from "react";
import { blogpost, comment } from "../utils/types";
import { useNavigate } from "react-router-dom";
interface props {
  post: blogpost;
}
const CommentForm = (props: props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function onSubmit() {
    let comment: comment = {
      name: name,
      email: email,
      comment: message,
    };
    props.post.comments?.push(comment);
    navigate("/" + props.post.title);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Skicka</button>
    </form>
  );
};

export default CommentForm;
