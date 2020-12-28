import React, { useEffect } from "react";
import VideoPoster from "./../../images/lar.jpeg";
import VideoSource from "./../../videos/lar2.mp4";
export default function Video() {
  useEffect(() => {
    const canPlayType = !!document.createElement("video").canPlayType;
    if (canPlayType) {
      let videoContainer = document.getElementById("videoContainer");
      let video = document.getElementById("video");
      let videoControls = document.getElementById("video-controls");

      video.controls = false;
      videoControls.style.display = "block";

      let playpause = document.getElementById("playpause");
      let stop = document.getElementById("stop");
      let mute = document.getElementById("mute");
      let volinc = document.getElementById("volinc");
      let voldec = document.getElementById("voldec");
      let progress = document.getElementById("progress");
      let progressBar = document.getElementById("progress-bar");
      let fullscreen = document.getElementById("fs");
      let fullScreenEnabled = !!(
        document.fullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled ||
        document.webkitSupportsFullscreen ||
        document.webkitFullscreenEnabled ||
        document.createElement("video").webkitRequestFullScreen
      );

      if (!fullScreenEnabled) {
        fullscreen.style.display = "none";
      }

      fullscreen.addEventListener("click", function (e) {
        handleFullscreen();
      });

      video.addEventListener("loadedmetadata", (e) => {
        progress.setAttribute("max", video.duration);
      });

      video.addEventListener("timeupdate", (e) => {
        progress.value = video.currentTime;
        progressBar.style.width =
          Math.floor((video.currentTime / video.duration) * 1000) + "%";
      });

      progress.addEventListener("click", (e) => {
        const pos = (e.pageX - progress.offsetLeft) / progress.offsetWidth;
        video.currentTime = pos * video.duration;
      });

      playpause.addEventListener("click", () => {
        if (video.paused || video.ended) {
          video.play();
        } else {
          video.pause();
        }
      });

      stop.addEventListener("click", (e) => {
        video.pause();
        video.currentTime = 0;
        progress.value = 0;
      });

      mute.addEventListener("click", (e) => {
        video.muted = !video.muted;
      });

      volinc.addEventListener("click", (e) => alterVolume("+"));
      voldec.addEventListener("click", (e) => alterVolume("-"));

      const alterVolume = (dir) => {
        const currentVolume = Math.floor(video.volume * 10) / 10;
        if (dir === "+" && currentVolume < 1) {
          video.volume += 0.1;
        } else if (dir === "-" && currentVolume > 0) {
          video.volume -= 0.1;
        }
      };

      const handleFullscreen = () => {
        if (isFullScreen()) {
          if (document.exitFullscreen) document.exitFullscreen();
          else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
          else if (document.webkitCancelFullScreen)
            document.webkitCancelFullScreen();
          else if (document.msExitFullscreen) document.msExitFullscreen();
          setFullscreenData(false);
        } else {
          if (videoContainer.requestFullscreen)
            videoContainer.requestFullscreen();
          else if (videoContainer.mozRequestFullScreen)
            videoContainer.mozRequestFullScreen();
          else if (videoContainer.webkitRequestFullScreen)
            videoContainer.webkitRequestFullScreen();
          else if (videoContainer.msRequestFullscreen)
            videoContainer.msRequestFullscreen();
          setFullscreenData(true);
        }
      };

      document.addEventListener("fullscreenchange", function (e) {
        setFullscreenData(
          !!(document.fullscreen || document.fullscreenElement)
        );
      });
      document.addEventListener("webkitfullscreenchange", function () {
        setFullscreenData(!!document.webkitIsFullScreen);
      });
      document.addEventListener("mozfullscreenchange", function () {
        setFullscreenData(!!document.mozFullScreen);
      });
      document.addEventListener("msfullscreenchange", function () {
        setFullscreenData(!!document.msFullscreenElement);
      });

      const isFullScreen = () => {
        return !!(
          document.fullscreen ||
          document.webkitIsFullScreen ||
          document.mozFullScreen ||
          document.msFullscreenElement ||
          document.fullscreenElement
        );
      };

      const setFullscreenData = (state) => {
        videoContainer.setAttribute("data-fullscreen", !!state);
      };
    }
  }, []);
  return (
    <figure className="videoContainer">
      <video id="video" controls preload="metadata" poster={VideoPoster}>
        <source src={VideoSource} type="video/mp4" />
        <a href={VideoSource}>Download</a>
      </video>
      <ul id="video-controls" className="controls">
        <li>
          <button id="playpause" type="button">
            Play/Pause
          </button>
        </li>
        <li>
          <button id="stop" type="button">
            Stop
          </button>
        </li>
        <li className="progress">
          <progress id="progress" value="0" min="0">
            <span id="progress-bar"></span>
          </progress>
        </li>
        <li>
          <button id="mute" type="button">
            Mute/Unmute
          </button>
        </li>
        <li>
          <button id="volinc" type="button">
            Vol+
          </button>
        </li>
        <li>
          <button id="voldec" type="button">
            Vol-
          </button>
        </li>
        <li>
          <button id="fs" type="button">
            Fullscreen
          </button>
        </li>
      </ul>
      <figcaption>
        Colored Glass <i>(Love and Redemption)</i>
      </figcaption>
    </figure>
  );
}
