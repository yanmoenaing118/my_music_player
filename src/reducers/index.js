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
      title: "Perfect",
      drama: "Perfect MV",
      singer: "Ed Sheeran",
      src: PerfectSrc,
      poster: PerfectPoster,
      subtitle: PerfectSubtitle,
    },
  ],

  currentSong: {
    title: "Pian Pian",
    drama: "Eternal Love of Dream",
    singer: "Dilraba Dilmurat & Silence Wang",
    src: ElodSrc,
    poster: ElodPoster,
    subtitle: ElodSubtitle,
  },
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      const { id } = action.payload;

      let song = state.songs.find((song) => song.id === id);

      if (song) {
        state.currentSong = song;
      } else {
        state.currentSong = state.songs[0];
      }
    },
  },
});

export const { setCurrentSong } = songsSlice.actions;

export default songsSlice.reducer;
