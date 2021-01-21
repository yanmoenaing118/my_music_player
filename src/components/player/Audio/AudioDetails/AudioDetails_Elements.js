import styled from "styled-components";

export const AudioElement = styled.audio`
  display: none;
`;

export const AudioDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  /* background-color: #fff; */

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const AudioTitleContainer = styled.div`
  color: #fff;
`;

export const AudioAlbumCoverPicture = styled.div`
  margin-right: 1rem;
  position: relative;
  img {
    width: 100%;
    max-width: 200px;
    max-height: 198px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    margin-right: 0;
  }
`;

export const AudioTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

export const AudioArtist = styled.h2`
  font-size: 0.85rem;
  font-weight: lighter;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 0.7rem;
  }
`;

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4)
  );
`;

export const FlipPosterContainer = styled.div`
  margin-left: auto;
  cursor: pointer;
  color: var(--primary-color);
  width: 22px;
  height: 22px;
  align-self: flex-end;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const Rotate = styled(FlipPosterContainer)`
  animation-name: rotate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  transform-origin: center;

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;
