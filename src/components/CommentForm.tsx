import { useState } from "react";
import { blogpost, comment } from "../utils/types";
import { useDispatch } from "react-redux";
import { addComment } from "../store/blogpostSlice";

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
      id: 1,
      name: name,
      email: email,
      comment: message,
    };

    dispatch(addComment({ post: props.post, comment: comment }));
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
