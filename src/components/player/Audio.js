import React, { createRef, useState, useEffect } from "react";
import { Container, ContainerCenter } from "../container/Container";

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
import { useSelector } from "react-redux";

export default function AudioPlayer() {
  const audioRef = createRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const songs = useSelector((state) => state.songs.songs);
  const currentSong = useSelector((state) => state.songs.songs[currentIndex]);

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(4);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [syncData, setSyncData] = useState([]);
  const [subtitleText, setSubtitleText] = useState("");
  const [bufferedWidth, setBufferedWidth] = useState(0);

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
      setPlay(false);
      setSyncData([]);
      setCurrentIndex(0);
    } else {
      setPlay(false);
      setSyncData([]);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSong = () => {
    setSubtitleText("");
    if (currentIndex > 0) {
      setPlay(false);
      setSyncData([]);
      setCurrentIndex((prev) => prev - 1);
    } else {
      setPlay(false);
      setSyncData([]);
      setCurrentIndex(songs.length - 1);
    }
  };

  useEffect(() => {
    fetchSubtitle(currentSong.subtitle)
      .then(createSubtitle)
      .then((data) => {
        setSyncData(data);
      });
  }, [currentSong.subtitle]);

  useEffect(() => {
    audioRef.current.controls = false;
  }, [audioRef]);
  return (
    <Container pad="0px">
      <ContainerCenter mWidth="100%">
        <AudioBackgroundImageWrapper className="AudioPoster">
          <GradientBg></GradientBg>
          <AudioBackgroundImage src={currentSong.poster} alt="Poster" />
        </AudioBackgroundImageWrapper>
        <Subtitle subtitleText={subtitleText} />
        <AudioPlayerContainer>
          <Container mb="10px">
            <ContainerCenter mWidth="800px">
              <AudioDetailsContainer>
                <AudioAlbumCoverPicture>
                  <img src={currentSong.poster} alt="Album Cover" />
                  <ImgOverlay></ImgOverlay>
                </AudioAlbumCoverPicture>
                <AudioTitleContainer>
                  <AudioElement
                    ref={audioRef}
                    src={currentSong.src}
                    preload="metadata"
                    className="Audio"
                    controls
                    onLoadedMetadata={onAudioMetadataLoad}
                    onProgress={onAudioProgress}
                    onTimeUpdate={onAudioTimeUpdate}
                    onEnded={onAudioEnded}
                  ></AudioElement>

                  <AudioTitle>{currentSong.title}</AudioTitle>
                  <AudioArtist>
                    Sang by {currentSong.singer} - {currentSong.drama}
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
