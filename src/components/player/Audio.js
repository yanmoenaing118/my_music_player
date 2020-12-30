import React, { createRef, useState, useEffect } from "react";
import { Container, ContainerCenter } from "../container/Container";
import MyAudio from "./../../audio/for_one_person.mp3";
import MySubtitle from "./../../audio/for_one_person.vtt";
import AudioPoster from "./../../images/general_lady_2.jpg";
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
import Subtitle from "./Subtitle";
import { fetchSubtitle, createSubtitle } from "../../utils";

export default function AudioPlayer() {
  const audioRef = createRef();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(4);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [syncData, setSyncData] = useState([]);
  const [subtitleText, setSubtitleText] = useState("");
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

    syncData.forEach(function (element, index, array) {
      var el;
      if (
        audioRef.current.currentTime * 1000 >= element.start &&
        audioRef.current.currentTime * 1000 <= element.end
      ) {
        setSubtitleText(syncData[index].part);
      }
    });
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
    fetchSubtitle(MySubtitle)
      .then(createSubtitle)
      .then((data) => {
        console.log(data);
        setSyncData(data);
      });
  }, []);

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
        <Subtitle subtitleText={subtitleText} />
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
                  <AudioArtist>
                    Sang by Ye Xuan Qing - General's Lady
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
