import React from "react";
import { useSelector } from "react-redux";
import { Container, ContainerCenter } from "./../../../container/Container";
import {
  AudioTitleContainer,
  AudioDetailsContainer,
  ImgOverlay,
  AudioAlbumCoverPicture,
  AudioElement,
  AudioArtist,
  AudioTitle,
  Rotate,
} from "./AudioDetails_Elements";

import { MdFlip } from "react-icons/md";

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
  onAudioPlay,
  onAudioLoadedData,
  onFlip,
}) {
  const imageLoaded = useSelector((state) => state.songs.imageLoaded);

  return (
    <Container mb="10px">
      <ContainerCenter mWidth="800px">
        <AudioDetailsContainer>
          <AudioAlbumCoverPicture>
            <img
              src={currentPoster}
              alt="Album Cover"
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
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
              onPlay={onAudioPlay}
              onLoadedData={onAudioLoadedData}
              autoPlay={true}
            ></AudioElement>

            <AudioTitle>{title}</AudioTitle>
            <AudioArtist>
              Sang by {singer} - {drama}
            </AudioArtist>
          </AudioTitleContainer>
          <Rotate onClick={onFlip}>
            <MdFlip size="100%" />
          </Rotate>
        </AudioDetailsContainer>
      </ContainerCenter>
    </Container>
  );
}
