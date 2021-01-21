import { useState } from "react";
import "./App.css";
import { Container, ContainerCenter } from "./components/container/Container";
import Audio from "./components/player/Audio/Audio";
import PlayList from "./components/playlist/PlayList";
import {
  OpenPlayListBtn,
  TogglePlayListBtnContainer,
} from "./components/buttons/Buttons";
import { RiPlayList2Line } from "react-icons/ri";
import Particles from "./components/particles/Particles";

function App() {
  // const router =
  const [showPlayList, setShowPlayList] = useState(false);

  const openPlayList = () => {
    setShowPlayList(true);
  };
  const closePlayList = () => {
    setShowPlayList(false);
  };

  return (
    <div className="App">
      <Particles />
      <Container>
        <ContainerCenter mWidth="800px">
          <TogglePlayListBtnContainer>
            <OpenPlayListBtn>
              <RiPlayList2Line size="100%" onClick={openPlayList} />
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
