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

  function onSubmit() {
    let comment: comment = {
      id: 9,
      name: name,
      email: email,
      comment: message,
    };
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
