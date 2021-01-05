import React from "react";
import styled from "styled-components";

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
`;

export default function AudioBackgroundImage({
  currentPoster,
  imageLoaded,
  setImageLoaded,
}) {
  return (
    <BackgroundImageWrapper>
      <GradientBg></GradientBg>
      <BackgroundImage
        src={currentPoster}
        alt="Poster"
        style={{ opacity: imageLoaded ? 1 : 0 }}
        onLoad={(e) => setImageLoaded(true)}
      />
    </BackgroundImageWrapper>
  );
}
