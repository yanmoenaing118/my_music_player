import React, { createRef, useState, useEffect } from "react";
import { Container, ContainerCenter } from "../container/Container";
import MyAudio from "./../../audio/lar1.mp3";
import AudioPoster from "./../../images/general_lady.jpg";
import ProgressBar from "./ProgressBar";
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

import {
  GradientBg,
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

export default function AudioPlayer() {
  const audioRef = createRef();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(4);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
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

  const onStop = (e) => {
    audioRef.current.currentTime = 0;
  };

  const onAudioMetadataLoad = (e) => {
    const duration = audioRef.current.duration;
    setEndTime(duration);
    setStartTime(0);
    setCurrentTime(0);
  };

  const onAudioTimeUpdate = (e) => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const onSkipAhead = (pos) => {
    // const pos = (e.pageX - e.target.offsetLeft) / e.target.offsetWidth;
    audioRef.current.currentTime = pos * audioRef.current.duration;
  };

  const onAudioEnded = () => {
    stopPlayer();
  };

  const stopPlayer = () => {
    audioRef.current.currentTime = 0;
    setPlay(false);
  };

  useEffect(() => {
    audioRef.current.controls = false;
  }, [audioRef]);
  return (
    <Container pad="0px">
      <ContainerCenter mWidth="100%">
        <AudioBackgroundImageWrapper className="AudioPoster">
          <GradientBg></GradientBg>
          <AudioBackgroundImage src={AudioPoster} alt="Poster" />
        </AudioBackgroundImageWrapper>
        <AudioPlayerContainer>
          <Container mb="10px">
            <ContainerCenter mWidth="800px">
              <AudioDetailsContainer>
                <AudioAlbumCoverPicture>
                  <img src={AudioPoster} alt="Album Cover" />
                </AudioAlbumCoverPicture>
                <AudioTitleContainer>
                  <AudioElement
                    ref={audioRef}
                    src={MyAudio}
                    preload="metadata"
                    className="Audio"
                    controls
                    onLoadedMetadata={onAudioMetadataLoad}
                    onTimeUpdate={onAudioTimeUpdate}
                    onEnded={onAudioEnded}
                  ></AudioElement>

                  <AudioTitle>Only For You</AudioTitle>
                  <AudioArtist>Taylor Swift - General's Lady</AudioArtist>
                </AudioTitleContainer>
              </AudioDetailsContainer>
            </ContainerCenter>
          </Container>

          <ProgressBar
            start={startTime}
            end={endTime}
            value={currentTime}
            skip={onSkipAhead}
          />

          <AudioControlsContainer>
            <AudioControlBtn small={true}>
              <MdSkipPrevious size="85%" />
            </AudioControlBtn>

            <AudioControlBtn onClick={onPausePlay}>
              {play ? (
                <MdPauseCircleOutline size="100%" />
              ) : (
                <MdPlayCircleOutline size="100%" />
              )}
            </AudioControlBtn>

            <AudioControlBtn small={true}>
              <MdSkipNext size="85%" />
            </AudioControlBtn>
          </AudioControlsContainer>
        </AudioPlayerContainer>
      </ContainerCenter>
    </Container>
  );
}
