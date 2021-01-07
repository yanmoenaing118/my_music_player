import { createSlice } from "@reduxjs/toolkit";

import initialState from "./data";

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setImageLoaded: (state, action) => {
      state.imageLoaded = action.payload;
    },
    setNextSong: (state) => {
      state.imageLoaded = false;
      if (state.currentSongIndex >= state.songs.length - 1) {
        state.currentSongIndex = 0;
      } else {
        state.currentSongIndex = state.currentSongIndex + 1;
      }
    },
    setPrevSong: (state) => {
      state.imageLoaded = false;
      if (state.currentSongIndex <= 0) {
        state.currentSongIndex = state.songs.length - 1;
      } else {
        state.currentSongIndex = state.currentSongIndex - 1;
      }
    },

    setSongByIndex: (state, action) => {
      if (action.payload !== state.currentSongIndex) {
        state.imageLoaded = false;
      }
      state.currentSongIndex = action.payload;
    },
  },
});

export const {
  setImageLoaded,
  setNextSong,
  setPrevSong,
  setSongByIndex,
} = songsSlice.actions;

export const getSongByIndex = (state, index) => state.songs.songs[index];

export default songsSlice.reducer;
