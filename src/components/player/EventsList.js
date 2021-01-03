// resource => https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
const audioEvent = {
  canplay:
    "Sent when enough data is available that the media can be played, at least for a couple of frames.  This corresponds to the HAVE_FUTURE_DATA readyState",
  ended: "Sent when playback completes",
  loadeddata: "The first frame of the media has finished loading",
  loadedmetadata:
    "The media's metadata has finished loading; all attributes now contain as much useful information as they're going to.",
  loadstart: "Sent when loading of the media begins",
  pause:
    "Sent when the playback state is changed to paused ( paused property is true)",
  play:
    "Sent when the playback state is no longer paused, as a result of the play method, or the autoplay attribute",

  playing:
    "Sent when the media has enough data to start playing, after the play event, but also when recovering from being stalled, when looping media restarts, and after seeked, if it was playing before seeking.",

  progress:
    "Sent periodically to inform interested parties of progress downloading the media. Information about the current amount of the media that has been downloaded is available in the media element's buffered attribute.",
  timeupdate:
    "The time indicated by the currentTime attribute has been updated",
  volumechange: "The volume has changed",

  waiting: "Playback has stopped because of a temporary lack of data",
};
