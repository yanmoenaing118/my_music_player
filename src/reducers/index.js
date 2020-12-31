import { createSlice } from "@reduxjs/toolkit";

// import OnlyForYouSrc from "./../audio/for_one_person.mp3";
// import OnlyForYouSubtitle from "./../audio/for_one_person.vtt";
// import OnlyForYouPoster from "./../images/general_lady_2.jpg";

const initialState = [
  // {
  //   title: "Only For You",
  //   drama: "General's Lady",
  //   src: MyAudio,
  //   poster: AudioPoster,
  //   subtitle: MySubtitle,
  // },
  // {
  //   title: "Perfect",
  //   drama: "Perfect MV",
  //   src: EnglishSong,
  //   poster: EnglishPoster,
  //   subtitle: EnglishSubtitle,
  // },
  // {
  //   title: "Pian Pian",
  //   drama: "Eternal Love of Dream",
  //   src: ElodAudio,
  //   poster: ElodPoster,
  //   subtitle: ElodSubtitle,
  // },
  // {
  //   title: "Coloured Glass",
  //   drama: "Love and Redemption",
  //   src: LarAudio,
  //   poster: LarPoster,
  //   subtitle: LarSubtitle,
  // },
];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
});

export default songsSlice.reducer;
