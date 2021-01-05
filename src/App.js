import { useState } from "react";
import "./App.css";
import { Container, ContainerCenter } from "./components/container/Container";
import Audio from "./components/player/Audio/Audio";
import PlayList from "./components/playlist/PlayList";
import {
  OpenPlayListBtn,
  TogglePlayListBtnContainer,
} from "./components/buttons/Buttons";
import { BsMusicNoteList } from "react-icons/bs";

function App() {
  const [showPlayList, setShowPlayList] = useState(false);

  const openPlayList = () => {
    setShowPlayList(true);
  };
  const closePlayList = () => {
    setShowPlayList(false);
  };

  return (
    <div className="App">
      <Container>
        <ContainerCenter mWidth="800px">
          <TogglePlayListBtnContainer>
            <OpenPlayListBtn>
              <BsMusicNoteList size="30px" onClick={openPlayList} />
            </OpenPlayListBtn>
          </TogglePlayListBtnContainer>
        </ContainerCenter>
      </Container>
      <PlayList open={showPlayList} closePlayList={closePlayList} />
      <Audio />
    </div>
  );
}

export default App;
