import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postSlice from "./blogpostSlice";
export const store = configureStore({
  reducer: {
    post: postSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
