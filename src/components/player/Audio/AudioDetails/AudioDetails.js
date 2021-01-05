import React from "react";
import { Container, ContainerCenter } from "./../../../container/Container";
import {
  AudioTitleContainer,
  AudioDetailsContainer,
  ImgOverlay,
  AudioAlbumCoverPicture,
  AudioElement,
  AudioArtist,
  AudioTitle,
} from "./AudioDetails_Elements";

export default function AudioDetails({
  currentPoster,
  currentSrc,
  title,
  singer,
  drama,
  audioRef,
  onAudioMetadataLoad,
  onAudioCanPlay,
  onAudioEnded,
  onAudioWaiting,
  onAudioProgress,
  onAudioTimeUpdate,
}) {
  return (
    <Container mb="10px">
      <ContainerCenter mWidth="800px">
        <AudioDetailsContainer>
          <AudioAlbumCoverPicture>
            <img src={currentPoster} alt="Album Cover" />
            <ImgOverlay></ImgOverlay>
          </AudioAlbumCoverPicture>
          <AudioTitleContainer>
            <AudioElement
              ref={audioRef}
              src={currentSrc}
              preload="metadata"
              type="audio/mpeg"
              className="Audio"
              onLoadedMetadata={onAudioMetadataLoad}
              onCanPlay={onAudioCanPlay}
              onWaiting={onAudioWaiting}
              onProgress={onAudioProgress}
              onTimeUpdate={onAudioTimeUpdate}
              onEnded={onAudioEnded}
            ></AudioElement>

            <AudioTitle>{title}</AudioTitle>
            <AudioArtist>
              Sang by {singer} - {drama}
            </AudioArtist>
          </AudioTitleContainer>
        </AudioDetailsContainer>
      </ContainerCenter>
    </Container>
  );
}
