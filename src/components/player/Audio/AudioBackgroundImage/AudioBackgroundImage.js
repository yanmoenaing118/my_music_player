import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setImageLoaded } from "./../../../../reducers";

const BackgroundImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const GradientBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.85) 51%,
    rgba(0, 1, 1, 0.85) 100%
  );
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: none;
  background-position: top center;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.2s ease;
`;

export default function AudioBackgroundImage({ currentPoster }) {
  const dispatch = useDispatch();
  const imageLoaded = useSelector((state) => state.songs.imageLoaded);
  return (
    <BackgroundImageWrapper>
      <GradientBg></GradientBg>
      <BackgroundImage
        src={currentPoster}
        alt="Poster"
        style={{ opacity: imageLoaded ? 1 : 0, transform: "scale(1)" }}
        onLoad={(e) => dispatch(setImageLoaded(true))}
      />
    </BackgroundImageWrapper>
  );
}
