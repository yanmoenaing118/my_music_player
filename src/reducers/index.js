import { createSlice } from "@reduxjs/toolkit";

import OnlyForYouSrc from "./../audio/for_one_person.mp3";
import OnlyForYouSubtitle from "./../audio/for_one_person.vtt";
import OnlyForYouPoster from "./../images/general_lady_2.jpg";

import PerfectSrc from "./../audio/perfect.mp3";
import PerfectSubtitle from "./../audio/perfect.vtt";
import PerfectPoster from "./../images/perfect.jpg";

import ElodSrc from "./../audio/elod.mp3";
import ElodSubtitle from "./../audio/elod.vtt";
import ElodPoster from "./../images/elod.png";

import ColouredGlassSrc from "./../audio/coloured_glass.mp3";
import ColouredGlassSubtitle from "./../audio/coloured_glass.vtt";
import ColouredGlassPoster from "./../images/coloured_glass.jpeg";

import MoonlightDrawnByCloudGlassSrc from "./../audio/moonlight_drawn_by_clouds.mp3";
import MoonlightDrawnByCloudGlassSubtitle from "./../audio/moonlight_drawn_by_clouds.vtt";
import MoonlightDrawnByCloudGlassPoster from "./../images/moonlight_drawn_by_clouds.jpg";

const initialState = {
  songs: [
    {
      id: 1,
      title: "Pian Pian",
      drama: "Eternal Love of Dream",
      singer: "Dilraba Dilmurat & Silence Wang",
      src: ElodSrc,
      poster: ElodPoster,
      subtitle: ElodSubtitle,
    },
    {
      id: 2,
      title: "Only For You",
      drama: "General's Lady",
      singer: "Ye Xuan Qing",
      src: OnlyForYouSrc,
      poster: OnlyForYouPoster,
      subtitle: OnlyForYouSubtitle,
    },
    {
      id: 3,
      title: "Coloured Glass",
      drama: "Love and Redemption",
      singer: "Liu Yu Ning",
      src: ColouredGlassSrc,
      poster: ColouredGlassPoster,
      subtitle: ColouredGlassSubtitle,
    },
    {
      id: 4,
      title: "Moonlight Drawn By Cloud",
      drama: "Love In The Moonlight",
      singer: "Someone",
      src: MoonlightDrawnByCloudGlassSrc,
      poster: MoonlightDrawnByCloudGlassPoster,
      subtitle: MoonlightDrawnByCloudGlassSubtitle,
    },
    {
      id: 5,
      title: "Perfect",
      drama: "Perfect MV",
      singer: "Ed Sheeran",
      src: PerfectSrc,
      poster: PerfectPoster,
      subtitle: PerfectSubtitle,
    },
  ],

  currentSongIndex: 0,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setNextSong: (state) => {
      if (state.currentSongIndex >= state.songs.length - 1) {
        state.currentSongIndex = 0;
      } else {
        state.currentSongIndex = state.currentSongIndex + 1;
      }
    },
    setPrevSong: (state) => {
      if (state.currentSongIndex <= 0) {
        state.currentSongIndex = state.songs.length - 1;
      } else {
        state.currentSongIndex = state.currentSongIndex - 1;
      }
    },

    setSongByIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
  },
});

export const { setNextSong, setPrevSong, setSongByIndex } = songsSlice.actions;

export const getSongByIndex = (state, index) => state.songs.songs[index];

export default songsSlice.reducer;
