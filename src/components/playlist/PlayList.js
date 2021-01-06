import React from "react";
import { MdClose } from "react-icons/md";
import { ClosePlayListBtn } from "../buttons/Buttons";
import { Container, ContainerCenter } from "../container/Container";
import {
  PlayListContainer,
  PlayListBar,
  PlayListTitle,
} from "./PlayListElements";
import PlayListItems from "./PlayListItems";

export default function PlayList({ open, closePlayList }) {
  console.log("open", open);
  return (
    <Container>
      <ContainerCenter mWidth="800px">
        <PlayListContainer open={open}>
          <PlayListBar>
            <PlayListTitle>My Play List</PlayListTitle>
            <ClosePlayListBtn onClick={closePlayList}>
              <MdClose size="30px" />
            </ClosePlayListBtn>
          </PlayListBar>
          <PlayListItems />
        </PlayListContainer>
      </ContainerCenter>
    </Container>
  );
}
