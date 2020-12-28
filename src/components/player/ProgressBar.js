import React, { createRef } from "react";
import format from "format-duration";
import "./progressBar.css";

export default function ProgressBar({ start, end, value, skip }) {
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
    <div className="ProgressBar">
      <progress
        className="Progress"
        value={value}
        min={start}
        max={end}
      ></progress>

      <div className="ProgressSpanWrapper" ref={elRef} onClick={onSkip}>
        <span
          className="ProgressSpan"
          onClick={onSkip}
          style={{
            width: `${width}%`,
          }}
        ></span>
      </div>

      <div className="Times">
        <span className="CurrentTime">{cur_duration_format}</span>
        <span className="EndTime">{end_duration_format}</span>
      </div>
    </div>
  );
}
