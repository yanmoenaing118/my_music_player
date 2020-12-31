import React, { createRef } from "react";
import format from "format-duration";
import { Container, ContainerCenter } from "../container/Container";
import {
  ProgressBarContainer,
  ProgressBar,
  ProgressBarPlayed,
  TimesContainer,
  Time,
  ProgressBarBuffered,
} from "./ProgressBarElements";

export default function Progress({ start, end, value, skip, bufferedWidth }) {
  const end_duration_format = format(end * 1000, { leading: true });
  const cur_duration_format = format(value * 1000, { leading: true });
  const width = Math.floor((value / end) * 100);
  const elRef = createRef();

  const onSkip = (e) => {
    const pos =
      (e.pageX - elRef.current.offsetLeft) / elRef.current.offsetWidth;
    skip(pos);
  };

  return (
    <ProgressBarContainer>
      {/* <progress
        className="Progress"
        value={value}
        min={start}
        max={end}
      ></progress> */}

      <ProgressBar ref={elRef} onClick={onSkip}>
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
