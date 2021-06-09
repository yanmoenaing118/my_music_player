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

  transition: transform 1s ease-in-out;
  transform: perspective(1100px);

  transform-style: preserve-3d;
  transform: ${({ rotated }) =>
    rotated
      ? "perspective(1100px) translateY(-100px) translateZ(-500px) rotateY(180deg) "
      : "perspective(1100px) translateY(0) translateZ(0) rotateY(0deg) "};
`;

const GradientBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.2) 25%,
    rgba(0, 0, 0, 0.3) 35%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.6) 80%,
    rgba(0, 0, 0, 0.9) 90%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: none;
  background-position: top center;
  object-fit: cover;
  object-position: center;
  z-index: 2;
  transition: transform 0.5s ease-in-out;
  transform: ${({ imageLoaded }) =>
    imageLoaded ? "translateX(0)" : "translateX(100%)"};
  opacity: ${({ imageLoaded }) => (imageLoaded ? 1 : 0)};
  box-shadow: 0 0 55px 50px rgba(255, 255, 255, 0.2);
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
