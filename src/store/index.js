import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./../reducers";

export default configureStore({
  reducer: {
    songs: songsReducer,
  },
});
