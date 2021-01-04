import React from "react";
import {
  PlayListItems as Items,
  PlayListItem as Item,
  SongTitle,
  Singer,
} from "./PlayListItemsElements";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "./../../reducers";

export default function PlayListItems() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);

  const playSong = (id) => {
    dispatch(setCurrentSong({ id }));
  };

  return (
    <Items>
      {songs.map((song, index) => {
        return (
          <Item key={song.id} onClick={(e) => playSong(index)}>
            <SongTitle>
              {song.title} - {song.drama}
            </SongTitle>
            <Singer>{song.singer}</Singer>
          </Item>
        );
      })}
    </Items>
  );
}
