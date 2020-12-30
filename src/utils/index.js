/**
 * WARNING CopyRight
 * The original author of this code is not me.
 *
 * I just made some modification to adjust the needs of my app.
 *
 * Original Author => https://github.com/the-codepunker/audio-sync-with-text
 */

import converVttToJson from "vtt-json";

export const fetchSubtitle = async (url) => {
  const res = await fetch(new Request(url));
  const subtitleText = await res.text();
  return subtitleText;
};

export const createSubtitle = async (text) => {
  let syncData = [];
  const result = await converVttToJson(text);
  let x = 0;
  for (let i = 0; i < result.length; i++) {
    //cover for bug in vtt to json here
    if (result[i].part && result[i].part.trim() !== "") {
      syncData[x] = result[i];
      x++;
    }
  }

  return syncData;
};
