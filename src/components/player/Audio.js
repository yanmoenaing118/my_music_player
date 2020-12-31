import React, { createRef, useState, useEffect } from "react";
import { Container, ContainerCenter } from "../container/Container";
import MyAudio from "./../../audio/for_one_person.mp3";
import MySubtitle from "./../../audio/for_one_person.vtt";
import AudioPoster from "./../../images/general_lady_2.jpg";

import ElodPoster from "./../../images/elod.png";
import ElodAudio from "./../../audio/elod.mp3";
import ElodSubtitle from "./../../audio/elod.vtt";

import LarAudio from "./../../audio/lar.mp3";
import LarPoster from "./../../images/lar.jpeg";
import LarSubtitle from "./../../audio/lar.vtt";

import EnglishSong from "./../../audio/english.mp3";
import EnglishPoster from "./../../images/english.jpg";
import EnglishSubtitle from "./../../audio/english.vtt";

import ProgressBar from "./ProgressBar";
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

import {
  GradientBg,
  ImgOverlay,
  AudioBackgroundImageWrapper,
  AudioArtist,
  AudioControlBtn,
  AudioControlsContainer,
  AudioDetailsContainer,
  AudioAlbumCoverPicture,
  AudioElement,
  AudioPlayerContainer,
  AudioTitle,
  AudioTitleContainer,
  AudioBackgroundImage,
} from "./AudioElements";
import Subtitle from "./Subtitle";
import { fetchSubtitle, createSubtitle } from "../../utils";

const songs = [
  {
    title: "Pian Pian",
    drama: "Eternal Love of Dream",
    src: ElodAudio,
    poster: ElodPoster,
    subtitle: ElodSubtitle,
  },
  {
    title: "Only For You",
    drama: "General's Lady",
    src: MyAudio,
    poster: AudioPoster,
    subtitle: MySubtitle,
  },
  {
    title: "Perfect",
    drama: "Perfect MV",
    src: EnglishSong,
    poster: EnglishPoster,
    subtitle: EnglishSubtitle,
  },

  {
    title: "Coloured Glass",
    drama: "Love and Redemption",
    src: LarAudio,
    poster: LarPoster,
    subtitle: LarSubtitle,
  },
];

export default function AudioPlayer() {
  const audioRef = createRef();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(4);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [syncData, setSyncData] = useState([]);
  const [subtitleText, setSubtitleText] = useState("");
  const [bufferedWidth, setBufferedWidth] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSongTitle, setCurrentSongTitle] = useState(
    songs[currentIndex].title
  );
  const [currentSongDrama, setCurrentSongDrama] = useState(
    songs[currentIndex].drama
  );
  const [currentPoster, setCurrentPoster] = useState(
    songs[currentIndex].poster
  );
  const [currentSong, setCurrentSong] = useState(songs[currentIndex].src);
  const [currentSubtitle, setCurrentSubtitle] = useState(
    songs[currentIndex].subtitle
  );

  const onPausePlay = (e) => {
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play();
      setPlay(true);
    } else {
      audioRef.current.pause();
      setPlay(false);
    }

    setPlay(!play);
  };

  const onAudioMetadataLoad = (e) => {
    const duration = audioRef.current.duration;
    setEndTime(duration);
    setStartTime(0);
    setCurrentTime(0);
  };

  const onAudioProgress = (e) => {
    let duration = audioRef.current.duration;
    console.log(audioRef.current.buffered);
    if (duration > 0) {
      for (var i = 0; i < audioRef.current.buffered.length; i++) {
        if (
          audioRef.current.buffered.start(
            audioRef.current.buffered.length - 1 - i
          ) < audioRef.current.currentTime
        ) {
          const bufferedWidth =
            (audioRef.current.buffered.end(
              audioRef.current.buffered.length - 1 - i
            ) /
              duration) *
            100;
          console.log(bufferedWidth);
          setBufferedWidth(bufferedWidth);
          break;
        }
      }
    }
  };

  const onAudioTimeUpdate = (e) => {
    setCurrentTime(audioRef.current.currentTime);

    syncData.forEach(function (element, index) {
      if (
        audioRef.current.currentTime * 1000 >= element.start &&
        audioRef.current.currentTime * 1000 <= element.end
      ) {
        setSubtitleText(syncData[index].part);
      }
    });
  };

  const onSkipAhead = (pos) => {
    audioRef.current.currentTime = pos * audioRef.current.duration;
  };

  const onAudioEnded = () => {
    stopPlayer();
  };

  const stopPlayer = () => {
    audioRef.current.currentTime = 0;
    setPlay(false);
  };

  const nextSong = () => {
    setSubtitleText("");
    if (currentIndex >= songs.length - 1) {
      setCurrentSongTitle(songs[0].title);
      setCurrentSongDrama(songs[0].drama);
      setCurrentSong(songs[0].src);
      setCurrentSubtitle(songs[0].subtitle);
      setCurrentPoster(songs[0].poster);
      setPlay(false);
      setSyncData([]);
      setCurrentIndex(0);
    } else {
      const songIndex = currentIndex + 1;
      setCurrentSongTitle(songs[songIndex].title);
      setCurrentSongDrama(songs[songIndex].drama);
      setCurrentSong(songs[songIndex].src);
      setCurrentSubtitle(songs[songIndex].subtitle);
      setCurrentPoster(songs[songIndex].poster);
      setPlay(false);
      setSyncData([]);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSong = () => {
    setSubtitleText("");
    if (currentIndex > 0) {
      const songIndex = currentIndex - 1;
      setCurrentSongTitle(songs[songIndex].title);
      setCurrentSongDrama(songs[songIndex].drama);
      setCurrentSong(songs[songIndex].src);
      setCurrentSubtitle(songs[songIndex].subtitle);
      setCurrentPoster(songs[songIndex].poster);
      setPlay(false);
      setSyncData([]);
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentSongTitle(songs[songs.length - 1].title);
      setCurrentSongDrama(songs[songs.length - 1].drama);
      setCurrentSong(songs[songs.length - 1].src);
      setCurrentSubtitle(songs[songs.length - 1].subtitle);
      setCurrentPoster(songs[songs.length - 1].poster);
      setPlay(false);
      setSyncData([]);
      setCurrentIndex(songs.length - 1);
    }
  };

  useEffect(() => {
    console.log(`Fetching ${currentSubtitle}`);
    fetchSubtitle(currentSubtitle)
      .then(createSubtitle)
      .then((data) => {
        console.log(data);
        setSyncData(data);
      });
  }, [currentSubtitle]);

  useEffect(() => {
    audioRef.current.controls = false;
  }, [audioRef]);
  return (
    <Container pad="0px">
      <ContainerCenter mWidth="100%">
        <AudioBackgroundImageWrapper className="AudioPoster">
          <GradientBg></GradientBg>
          <AudioBackgroundImage src={currentPoster} alt="Poster" />
        </AudioBackgroundImageWrapper>
        <Subtitle subtitleText={subtitleText} />
        <AudioPlayerContainer>
          <Container mb="10px">
            <ContainerCenter mWidth="800px">
              <AudioDetailsContainer>
                <AudioAlbumCoverPicture>
                  <img src={currentPoster} alt="Album Cover" />
                  <ImgOverlay></ImgOverlay>
                </AudioAlbumCoverPicture>
                <AudioTitleContainer>
                  <AudioElement
                    ref={audioRef}
                    src={currentSong}
                    preload="metadata"
                    className="Audio"
                    controls
                    onLoadedMetadata={onAudioMetadataLoad}
                    onProgress={onAudioProgress}
                    onTimeUpdate={onAudioTimeUpdate}
                    onEnded={onAudioEnded}
                  ></AudioElement>

                  <AudioTitle>{currentSongTitle}</AudioTitle>
                  <AudioArtist>
                    Sang by Ye Xuan Qing - {currentSongDrama}
                  </AudioArtist>
                </AudioTitleContainer>
              </AudioDetailsContainer>
            </ContainerCenter>
          </Container>

          <ProgressBar
            start={startTime}
            end={endTime}
            value={currentTime}
            skip={onSkipAhead}
            bufferedWidth={bufferedWidth}
          />

          <AudioControlsContainer>
            <AudioControlBtn small={true} onClick={prevSong}>
              <MdSkipPrevious size="85%" />
            </AudioControlBtn>

            <AudioControlBtn onClick={onPausePlay}>
              {play ? (
                <MdPauseCircleOutline size="100%" />
              ) : (
                <MdPlayCircleOutline size="100%" />
              )}
            </AudioControlBtn>

            <AudioControlBtn small={true} onClick={nextSong}>
              <MdSkipNext size="85%" />
            </AudioControlBtn>
          </AudioControlsContainer>
        </AudioPlayerContainer>
      </ContainerCenter>
    </Container>
  );
}
