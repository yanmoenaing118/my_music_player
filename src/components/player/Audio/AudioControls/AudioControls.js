import React from "react";
import {
  AudioControlsContainer,
  AudioControlBtn,
} from "./AudioControls_Elements";
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeat,
  MdRepeatOne,
} from "react-icons/md";
import { FaClosedCaptioning, FaRegClosedCaptioning } from "react-icons/fa";
export default function AudioControls({
  loopOneSong,
  play,
  setLoopOneSong,
  prevSong,
  onPausePlay,
  nextSong,
  mmsub,
  setMmsub,
}) {
  return (
    <AudioControlsContainer>
      <AudioControlBtn small={true}>
        {loopOneSong ? (
          <MdRepeatOne size="75%" onClick={(e) => setLoopOneSong(false)} />
        ) : (
          <MdRepeat size="75%" onClick={(e) => setLoopOneSong(true)} />
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

      <AudioControlBtn small={true} onClick={setMmsub}>
        {mmsub ? (
          <FaClosedCaptioning size="75%" />
        ) : (
          <FaRegClosedCaptioning size="75%" />
        )}
      </AudioControlBtn>
    </AudioControlsContainer>
  );
}
