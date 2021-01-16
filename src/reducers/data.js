import OnlyForYouSrc from "./../audio/for_one_person.mp3";
import OnlyForYouSubtitle from "./../audio/for_one_person.vtt";
import OnlyForYouPoster from "./../images/general_lady.png";

import ElodSrc from "./../audio/elod.mp3";
import ElodSubtitle from "./../audio/elod.vtt";
import ElodPoster from "./../images/elod.png"; // jpeg || png

import ColouredGlassSrc from "./../audio/coloured_glass.mp3";
import ColouredGlassSubtitle from "./../audio/coloured_glass.vtt";
import ColouredGlassPoster from "./../images/coloured_glass.jpeg";

import MoonlightDrawnByCloudGlassSrc from "./../audio/moonlight_drawn_by_clouds.mp3";
import MoonlightDrawnByCloudGlassSubtitle from "./../audio/moonlight_drawn_by_clouds.vtt";
import MoonlightDrawnByCloudGlassPoster from "./../images/moonlight.jpeg";

import HereIAmAgainSrc from "./../audio/here_i_am_again.mp3";
import HereIAmAgainSubtitle from "./../audio/here_i_am_again.vtt";
import HereIAmAgainPoster from "./../images/cloy.jpeg";

import DoneForMeSrc from "./../audio/done_for_me.mp3";
import DoneForMeSubtitle from "./../audio/done_for_me.vtt";
import DoneForMePoster from "./../images/hotel_deluna.jpg";

import ThisLoveSrc from "./../audio/this_love.mp3";
import ThisLoveSubtitle from "./../audio/this_love.vtt";
import ThisLovePoster from "./../images/dst.jpeg";

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
      title: "Here I am again",
      drama: "Crash Landing On You",
      singer: "Davichi",
      src: HereIAmAgainSrc,
      poster: HereIAmAgainPoster,
      subtitle: HereIAmAgainSubtitle,
    },

    {
      id: 7,
      title: "This Love",
      drama: "Descendants of The Sun",
      singer: "Davichi",
      src: ThisLoveSrc,
      poster: ThisLovePoster,
      subtitle: ThisLoveSubtitle,
    },

    {
      id: 6,
      title: "Done For Me",
      drama: "Hotel De Luna",
      singer: "Punch",
      src: DoneForMeSrc,
      poster: DoneForMePoster,
      subtitle: DoneForMeSubtitle,
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
  ],

  currentSongIndex: 0,

  imageLoaded: false,
};

export default initialState;
