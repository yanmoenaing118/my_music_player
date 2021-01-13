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
  z-index: -11;
  /* overflow: hidden; */

  transition: transform 1s ease-in-out;
  transform: perspective(11000px);

  transform-style: preserve-3d;
  transform: ${({ rotated }) =>
    rotated
      ? "perspective(1100px) translateZ(-260px) rotateY(180deg) "
      : "perspective(1100px) translateZ(0) rotateY(0deg) "};
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
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 65%,
    rgba(0, 1, 1, 0.6) 100%
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
  transition: transform 0.5s ease-in-out;
  transform: ${({ imageLoaded }) =>
    imageLoaded ? "translateX(0)" : "translateX(100%)"};
  opacity: ${({ imageLoaded }) => (imageLoaded ? 1 : 0)};
`;

export default function AudioBackgroundImage({ currentPoster, rotated }) {
  const dispatch = useDispatch();
  const imageLoaded = useSelector((state) => state.songs.imageLoaded);

  return (
    <BackgroundImageWrapper rotated={rotated}>
      <GradientBg></GradientBg>
      <BackgroundImage
        src={currentPoster}
        alt="Poster"
        imageLoaded={imageLoaded}
        onLoad={(e) => dispatch(setImageLoaded(true))}
      />
    </BackgroundImageWrapper>
  );
}
