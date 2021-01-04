import React, { createRef, useState, useEffect } from "react";
import { Container, ContainerCenter } from "../container/Container";

import ProgressBar from "./ProgressBar";
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeat,
  MdRepeatOne,
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
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { setCurrentSong } from "../../reducers";

export default function AudioPlayer() {
  const audioRef = createRef();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const songs = useSelector((state) => state.songs.songs);
  const currentSong = useSelector((state) => state.songs.currentSong);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(4);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [syncData, setSyncData] = useState([]);
  const [subtitleText, setSubtitleText] = useState("");
  const [bufferedWidth, setBufferedWidth] = useState(0);
  const [loopOneSong, setLoopOneSong] = useState(false);

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

  const onAudioCanPlay = () => {
    /**
     * if there is enought data to begin playing the audio
     * play the audio and set play state to true
     */
    audioRef.current.play();
    setWaiting(false);
    setPlay(true);
  };

  const onAudioWaiting = () => {
    setWaiting(true);
  };

  const onAudioProgress = () => {
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
    /**
     * if the audio has ended, stop the player and increment the current index to begin playing the next song
     */
    stopPlayer();
    const songIndex = setLoopOneSong
      ? currentIndex
      : currentIndex >= songs.length - 1
      ? 0
      : currentIndex + 1;
    setCurrentIndex(songIndex);
  };

  const stopPlayer = () => {
    /**
     * stop when audio ends by setting currentTime to 0
     */
    audioRef.current.currentTime = 0;
    resetStates();
  };

  const nextSong = () => {
    resetStates();
    let songIndex = currentIndex >= songs.length - 1 ? 0 : currentIndex + 1;
    dispatch(setCurrentSong({ id: songIndex }));
    setCurrentIndex(songIndex);
  };

  const prevSong = () => {
    resetStates();
    let songIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    dispatch(setCurrentSong({ id: songIndex }));
    setCurrentIndex(songIndex);
  };

  const resetStates = () => {
    setWaiting(false);
    setPlay(false);
    setSyncData([]);
    setSubtitleText("");
    setBufferedWidth(0);
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

  return (
    <Container pad="0px">
      <ContainerCenter mWidth="100%">
        {waiting && <Loading />}
        <AudioBackgroundImageWrapper className="AudioPoster">
          <GradientBg></GradientBg>
          <AudioBackgroundImage
            src={currentSong.poster}
            alt="Poster"
            style={{ display: imageLoaded ? "block" : "none" }}
            onLoad={(e) => setImageLoaded(true)}
          />
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
                    type="audio/mpeg"
                    className="Audio"
                    onLoadedMetadata={onAudioMetadataLoad}
                    onCanPlay={onAudioCanPlay}
                    onWaiting={onAudioWaiting}
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
            <AudioControlBtn small={true}>
              {loopOneSong ? (
                <MdRepeatOne
                  size="75%"
                  onClick={(e) => setLoopOneSong(!loopOneSong)}
                />
              ) : (
                <MdRepeat
                  size="75%"
                  onClick={(e) => setLoopOneSong(!loopOneSong)}
                />
              )}
            </AudioControlBtn>
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
