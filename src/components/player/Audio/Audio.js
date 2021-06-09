import React, { createRef, useState, useEffect } from "react";
import { Container, ContainerCenter } from "../../container/Container";

import ProgressBar from "../ProgressBar/ProgressBar";

import { AudioPlayerContainer } from "./AudioElements";
import Subtitle from "../Subtitle";
import { fetchSubtitle, createSubtitle } from "../../../utils";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";
import { getSongByIndex, setNextSong, setPrevSong } from "../../../reducers";
import AudioControls from "./AudioControls/AudioControls";
import AudioDetails from "./AudioDetails/AudioDetails";
import AudioBackgroundImage from "./AudioBackgroundImage/AudioBackgroundImage";

export default function AudioPlayer() {
  const audioRef = createRef();

  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.songs.currentSongIndex);
  const currentSong = useSelector((state) =>
    getSongByIndex(state, currentIndex)
  );

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(4);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [syncDataEng, setSyncDataEng] = useState([]);
  const [syncDataMm, setSyncDataMm] = useState([]);
  const [subtitleText, setSubtitleText] = useState("");
  const [bufferedWidth, setBufferedWidth] = useState(0);
  const [loopOneSong, setLoopOneSong] = useState(false);
  const [mmsub, setMmsub] = useState(false);

  const [flip, setFlip] = useState(false);

  const onPausePlay = (e) => {
    /**
     * change the play button state depending upon the play state
     * toggle the play state by checking if the audio is playing or not
     */
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play();
      setPlay(true);
    } else {
      audioRef.current.pause();
      setPlay(false);
    }
    // setPlay(!play);
  };

  const onAudioLoadedData = () => {
    audioRef.current.play();
    setPlay(true);
  };

  const onAudioMetadataLoad = (e) => {
    /**
     * if the audio's metadata has been loaded
     * set duration, startTime, endTime of the audio
     */
    const duration = audioRef.current.duration;
    setEndTime(duration);
    setStartTime(0);
    setCurrentTime(0);
  };

  const onAudioPlay = () => {
    setPlay(true);
  };

  const onAudioCanPlay = () => {
    /**
     * if there is enought data to begin playing the audio
     * play the audio and set play state to true
     */
    audioRef.current.play();
    setWaiting(false);
    // setPlay(true);
  };

  const onAudioWaiting = () => {
    setWaiting(true);
  };

  const onAudioProgress = () => {
    /**
     * show the user until where they can play the audio without waiting
     */
    let duration = audioRef.current.duration;

    if (duration > 0) {
      for (var i = 0; i < audioRef.current.buffered.length; i++) {
        if (
          audioRef.current.buffered.start(
            audioRef.current.buffered.length - 1 - i
          ) < audioRef.current.currentTime
        ) {
          const bufferedWidth =
            (audioRef.current.buffered.end(
              audioRef.current.buffered.length - 1 - i
            ) /
              duration) *
            100;
          /**
           * set the buffer downloaded
           */
          setBufferedWidth(bufferedWidth);
          break;
        }
      }
    }
  };

  const onAudioTimeUpdate = (e) => {
    /**
     * sync the subtitle with audio's currentTime
     */
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
    
    let syncData = mmsub ? syncDataMm : syncDataEng;

    if(syncData.length === 0 ) {
      setSubtitleText("မြန်မာစာတန်းထိုးမရနိင်ပါ");
    } else {
      syncData.forEach(function (element, index) {
        if (
          audioRef.current.currentTime * 1000 >= element.start &&
          audioRef.current.currentTime * 1000 <= element.end
        ) {
          setSubtitleText(syncData[index].part);
        }
      });
    }

    
  };

  const onSkipAhead = (pos) => {
    /**
     * skip to position where the user click
     */
    audioRef.current.currentTime = pos * audioRef.current.duration;
  };

  const onAudioEnded = () => {
    /**
     * if the audio has ended and fetch next song to begin playing the next song
     */

    // if the audio ends reset all states
    if (loopOneSong) {
      resetStates({ replayCurrent: true });
      // if loopOneSong is true, replay the current song
      audioRef.current.play();
      return;
    }

    resetStates();
    dispatch(setNextSong());
  };

  // const stopPlayer = () => {
  //   /**
  //    * stop when audio ends by setting currentTime to 0
  //    */
  //   audioRef.current.currentTime = 0;
  //   resetStates();
  // };

  const nextSong = () => {
    // (**) reset is needed to clear out all of the states for current song
    resetStates();
    dispatch(setNextSong());
  };

  const prevSong = () => {
    // (**) reset is needed to clear out all of the states for current song
    resetStates();
    dispatch(setPrevSong());
  };

  const resetStates = () => {
    setWaiting(false);
    setPlay(false);
    setSyncDataEng([]);
    setSyncDataMm([]);
    setSubtitleText("");
    setBufferedWidth(0);
    setMmsub(false);
  };

  const onFlip = () => {
    setFlip(!flip);
  };

  const toggleTranslation = () => {
    setMmsub((prev) => !prev);
  };

  useEffect(() => {
    resetStates();    
  }, [currentIndex]);

  useEffect(() => {
    /**
     * if the current song has changed, fetch the subtitle for new song
     */
    resetStates();
    fetchSubtitle(currentSong.eng_subtitle)
      .then(createSubtitle)
      .then((data) => {
        setSyncDataEng(data);
        return fetchSubtitle(currentSong.mm_subtitle);
      })
      .then(createSubtitle)
      .then((data) => {
        setSyncDataMm(data);
      });
  }, [currentSong]);

  return (
    <Container pad="0px">
      <ContainerCenter mWidth="100%">
        {waiting && <Loading />}
        <AudioBackgroundImage
          currentPoster={currentSong.poster}
          rotated={flip}
        />
        <Subtitle subtitleText={subtitleText} />
        <AudioPlayerContainer>
          <AudioDetails
            title={currentSong.title}
            singer={currentSong.singer}
            drama={currentSong.drama}
            currentPoster={currentSong.poster}
            currentSrc={currentSong.src}
            audioRef={audioRef}
            onAudioMetadataLoad={onAudioMetadataLoad}
            onAudioCanPlay={onAudioCanPlay}
            onAudioEnded={onAudioEnded}
            onAudioWaiting={onAudioWaiting}
            onAudioProgress={onAudioProgress}
            onAudioTimeUpdate={onAudioTimeUpdate}
            onAudioPlay={onAudioPlay}
            onAudioLoadedData={onAudioLoadedData}
            onFlip={onFlip}
          />

          <ProgressBar
            start={startTime}
            end={endTime}
            value={currentTime}
            skip={onSkipAhead}
            bufferedWidth={bufferedWidth}
          />

          <AudioControls
            loopOneSong={loopOneSong}
            play={play}
            setLoopOneSong={setLoopOneSong}
            prevSong={prevSong}
            onPausePlay={onPausePlay}
            nextSong={nextSong}
            setMmsub={toggleTranslation}
            mmsub={mmsub}
          />
        </AudioPlayerContainer>
      </ContainerCenter>
    </Container>
  );
}
