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
      title: "Pian Pian",
      drama: "Eternal Love of Dream",
      singer: "Dilraba Dilmurat & Silence Wang",
      src: ElodSrc,
      poster: ElodPoster,
      subtitle: ElodSubtitle,
    },
    {
      title: "Only For You",
      drama: "General's Lady",
      singer: "Ye Xuan Qing",
      src: OnlyForYouSrc,
      poster: OnlyForYouPoster,
      subtitle: OnlyForYouSubtitle,
    },
    {
      title: "Coloured Glass",
      drama: "Love and Redemption",
      singer: "Liu Yu Ning",
      src: ColouredGlassSrc,
      poster: ColouredGlassPoster,
      subtitle: ColouredGlassSubtitle,
    },
    {
      title: "Perfect",
      drama: "Perfect MV",
      singer: "Ed Sheeran",
      src: PerfectSrc,
      poster: PerfectPoster,
      subtitle: PerfectSubtitle,
    },
  ],
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
});

export default songsSlice.reducer;
