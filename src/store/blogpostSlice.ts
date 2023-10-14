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
  posts: [
    {
      id: 1,
      title: "Inlägg 1",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[0],
      comments: [{ id: 1, name: "123", email: "123", comment: "123" }],
    },
    {
      id: 2,
      title: "Inlägg 2",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[0],
    },
    {
      id: 3,
      title: "Inlägg 3",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[0],
    },
    {
      id: 4,
      title: "Inlägg 4",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[0],
    },
    {
      id: 5,
      title: "Inlägg 5",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[0],
    },
    {
      id: 6,
      title: "Inlägg 6",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2022-02-08",
      category: categorys[0],
    },
    {
      id: 7,
      title: "Inlägg 2",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2022-02-08",
      category: categorys[0],
    },
    {
      id: 7,
      title: "Inlägg 3",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2022-02-08",
      category: categorys[0],
    },
    {
      id: 8,
      title: "Inlägg 4",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2022-02-08",
      category: categorys[0],
    },
    {
      id: 9,
      title: "Inlägg 5",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[1],
    },
    {
      id: 10,
      title: "Inlägg 1",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[1],
    },
    {
      id: 11,
      title: "Inlägg 2",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2021-02-08",
      category: categorys[1],
    },
    {
      id: 12,
      title: "Inlägg 3",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[1],
    },
    {
      id: 13,
      title: "Inlägg 4",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[2],
    },
    {
      id: 14,
      title: "Inlägg 5",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
      date: "2023-02-08",
      category: categorys[2],
    },
  ],
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
