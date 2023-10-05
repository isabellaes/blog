import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { blogpost, comment, category } from "../utils/types";
import { blogposts, categorys } from "../utils/types";

interface initialstateinterface {
  posts: blogpost[];
  categories: category[];
}

interface payloadAction {
  post: blogpost;
  comment: comment;
}

const initialstate: initialstateinterface = {
  posts: blogposts,
  categories: categorys,
};

export const postSlice = createSlice({
  name: "PostSlice",
  initialState: initialstate,
  reducers: {
    addComment: (state, action: PayloadAction<payloadAction>) => {
      let index = state.posts.findIndex(
        (x) => x.title === action.payload.post.title
      );
      state.posts[index].comments?.push(action.payload.comment);
    },
  },
});

export const { addComment } = postSlice.actions;
export default postSlice.reducer;
