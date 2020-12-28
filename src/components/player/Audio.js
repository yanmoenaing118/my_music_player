import React, { createRef, useState, useEffect } from "react";
import { Container, ContainerCenter } from "../container/Container";
import MyAudio from "./../../audio/lar1.mp3";
import AudioPoster from "./../../images/general_lady.jpg";
import "./audio.css";
import ProgressBar from "./ProgressBar";
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

export default function AudioPlayer() {
  const audioRef = createRef();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(4);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const onPausePlay = (e) => {
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setPlay(!play);
  };

  // const onStop = (e) => {
  //   audioRef.current.currentTime = 0;
  // };

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

  useEffect(() => {
    audioRef.current.controls = false;
  }, [audioRef]);
  return (
    <Container pad="0px">
      <ContainerCenter mWidth="100%">
        <div className="AudioPlayer">
          <div className="AudioPoster">
            <img src={AudioPoster} alt="Poster" />
          </div>
          <Container pad="0">
            <ContainerCenter mWidth="800px">
              <div className="AudioActions">
                <div className="AudioContainer">
                  <audio
                    ref={audioRef}
                    src={MyAudio}
                    preload="metadata"
                    className="Audio"
                    controls
                    onLoadedMetadata={onAudioMetadataLoad}
                    onTimeUpdate={onAudioTimeUpdate}
                  ></audio>
                  <div className="AudioInfo">
                    <div className="AudioArtist">
                      <h3>Only For You</h3>
                      <span>Taylor Swift - General's Lady</span>
                    </div>
                    <ProgressBar
                      start={startTime}
                      end={endTime}
                      value={currentTime}
                      skip={onSkipAhead}
                    />
                  </div>
                </div>
                <div className="AudioControls">
                  <button className="AudioBtn">
                    <MdSkipPrevious size="40px" />
                  </button>
                  <button className="AudioBtn StopPause" onClick={onPausePlay}>
                    {play ? (
                      <MdPauseCircleOutline size="60px" />
                    ) : (
                      <MdPlayCircleOutline size="60px" />
                    )}
                  </button>

                  <button className="AudioBtn">
                    <MdSkipNext size="40px" />
                  </button>
                </div>
              </div>
            </ContainerCenter>
          </Container>
        </div>
      </ContainerCenter>
    </Container>
  );
}
