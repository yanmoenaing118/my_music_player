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
    /**
     * change the play button state depending upon the play state
     * toggle the play state by checking if the audio is playing or not
     */
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
    /**
     * if the audio's metadata has been loaded
     * set duration, startTime, endTime of the audio
     */
    const duration = audioRef.current.duration;
    setEndTime(duration);
    setStartTime(0);
    setCurrentTime(0);
  };

  const onAudioCanPlay = (e) => {
    /**
     * if there is enought data to begin playing the audio
     * play the audio and set play state to true
     */
    audioRef.current.play();
    setPlay(true);
  };

  const onAudioProgress = (e) => {
    /**
     * show the user until where they can play the audio without waiting
     */
    let duration = audioRef.current.duration;

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
          /**
           * set the buffer downloaded
           */
          setBufferedWidth(bufferedWidth);
          break;
        }
      }
    }
  };

  const onAudioTimeUpdate = (e) => {
    /**
     * sync the subtitle with audio's currentTime
     */
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
    /**
     * skip to position where the user click
     */
    audioRef.current.currentTime = pos * audioRef.current.duration;
  };

  const onAudioEnded = () => {
    console.log("ended");
    /**
     * if the audio has ended, stop the player and increment the current index to begin playing the next song
     */
    setSubtitleText("");
    stopPlayer();
    if (currentIndex >= songs.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => currentIndex + 1);
    }
  };

  const stopPlayer = () => {
    /**
     * stop when audio ends by setting currentTime to 0
     */
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
    /**
     * if the current song has changed, fetch the subtitle for new song
     */
    fetchSubtitle(currentSong.subtitle)
      .then(createSubtitle)
      .then((data) => {
        setSyncData(data);
      });
  }, [currentSong.subtitle]);

  useEffect(() => {
    /**
     * hide the browser's default audio controls
     */
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
                    onCanPlay={onAudioCanPlay}
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
