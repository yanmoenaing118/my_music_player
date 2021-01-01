import React, { createRef, useState } from "react";
import format from "format-duration";
import { Container, ContainerCenter } from "../container/Container";
import {
  ProgressBarContainer,
  ProgressBar,
  ProgressBarPlayed,
  TimesContainer,
  Time,
  ProgressBarBuffered,
  ThatTime,
} from "./ProgressBarElements";

export default function Progress({ start, end, value, skip, bufferedWidth }) {
  const end_duration_format = format(end * 1000, { leading: true });
  const cur_duration_format = format(value * 1000, { leading: true });
  const width = Math.floor((value / end) * 100);
  const elRef = createRef();

  const [thatTime, setThatTime] = useState("00:00");
  const [thatTimePosition, setThatTimePosition] = useState(0);
  const [showTimePosition, setShowTimePosition] = useState(false);

  const onSkip = (e) => {
    const pos =
      (e.pageX - elRef.current.offsetLeft) / elRef.current.offsetWidth;
    skip(pos);
  };

  const onMouseHover = (e) => {
    setShowTimePosition(true);
    const pos =
      (e.pageX - elRef.current.offsetLeft) / elRef.current.offsetWidth;
    let thatTime = format(end * pos * 1000, { leading: true });
    setThatTimePosition(e.pageX);
    setThatTime(thatTime);
  };

  const onMouseLeave = (e) => {
    setShowTimePosition(false);
  };

  return (
    <ProgressBarContainer>
      {/* <progress
        className="Progress"
        value={value}
        min={start}
        max={end}
      ></progress> */}

      <ProgressBar
        ref={elRef}
        onClick={onSkip}
        onMouseMove={onMouseHover}
        onMouseLeave={onMouseLeave}
      >
        {showTimePosition ? (
          <ThatTime style={{ left: `${thatTimePosition}px` }}>
            {thatTime}
          </ThatTime>
        ) : null}
        <ProgressBarBuffered
          style={{ width: `${bufferedWidth}%` }}
        ></ProgressBarBuffered>
        <ProgressBarPlayed
          className="ProgressSpan"
          onClick={onSkip}
          style={{
            width: `${width}%`,
          }}
        ></ProgressBarPlayed>
      </ProgressBar>

      <Container>
        <ContainerCenter mWidth="800px">
          <TimesContainer>
            <Time>{cur_duration_format}</Time>
            <Time>{end_duration_format}</Time>
          </TimesContainer>
        </ContainerCenter>
      </Container>
    </ProgressBarContainer>
  );
}
