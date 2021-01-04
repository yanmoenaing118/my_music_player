import React from "react";
import { MdClose } from "react-icons/md";
import { ClosePlayListBtn } from "../buttons/Buttons";
import { Container, ContainerCenter } from "../container/Container";
import {
  PlayListContainer,
  PlayListItem,
  PlayListItems,
} from "./PlayListElements";

export default function PlayList({ open, closePlayList }) {
  console.log("open", open);
  return (
    <Container>
      <ContainerCenter mWidth="800px">
        <PlayListContainer open={open}>
          <ClosePlayListBtn onClick={closePlayList}>
            <MdClose size="30px" />
          </ClosePlayListBtn>
          <PlayListItems>
            <PlayListItem>Song one</PlayListItem>
            <PlayListItem>Song one</PlayListItem>
            <PlayListItem>Song one</PlayListItem>
          </PlayListItems>
        </PlayListContainer>
      </ContainerCenter>
    </Container>
  );
}
