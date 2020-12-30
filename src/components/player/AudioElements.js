import styled from "styled-components";

export const AudioPlayerContainer = styled.div`
  width: 100%;
  position: relative;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* height: 80px; */
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 999;
  padding: 2rem 0;
`;

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
  color: #999;
`;

export const AudioAlbumCoverPicture = styled.div`
  margin-right: 1rem;

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

export const AudioControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;

export const AudioControlBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  color: var(--primary-color);
  width: ${({ small }) => (small ? "30px" : "50px")};

  &:not(:last-child) {
    margin-right: 1.6rem;
  }
  @media screen and (max-width: 480px) {
    width: ${({ small }) => (small ? "25px" : "40px")};
  }
`;

export const AudioBackgroundImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export const GradientBg = styled.div`
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

export const AudioBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: none;
  background-position: top center;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;
