import React from "react";
import {
  PlayListItems as Items,
  PlayListItem as Item,
  SongTitle,
  Singer,
  ItemPlaying,
} from "./PlayListItemsElements";
import { useSelector, useDispatch } from "react-redux";
import { setSongByIndex } from "./../../reducers";
import { BsMusicNoteBeamed } from "react-icons/bs";

export default function PlayListItems({ closePlayList }) {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const currentSongIndex = useSelector((state) => state.songs.currentSongIndex);

  return (
    <Items>
      {songs.map((song, index) => {
        return (
          <Item
            key={index}
            onClick={(e) => {
              closePlayList();
              dispatch(setSongByIndex(index));
            }}
          >
            <SongTitle>
              {song.title} - {song.drama}
            </SongTitle>
            <Singer>{song.singer}</Singer>
            {currentSongIndex === index ? (
              <ItemPlaying>
                <BsMusicNoteBeamed />
              </ItemPlaying>
            ) : null}
          </Item>
        );
      })}
    </Items>
  );
}
