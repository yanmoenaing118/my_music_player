import styled from "styled-components";

export const PlayListItems = styled.ul`
  list-style: none;
  width: 100%;
  overflow-y: scroll;
  height: 100vh;
`;

export const PlayListItem = styled.li`
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  line-height: 1.6;
  transition: background-color 0.1s ease-in;

  &:hover {
    & * {
      color: #fff;
    }
    background-color: rgba(222, 222, 222, 0.2);
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.4rem;
  }
`;

export const SongTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #eee;
  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Singer = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  color: #777;
  @media screen and (max-width: 480px) {
    font-size: 0.65rem;
  }
`;

export const ItemPlaying = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  width: 50px;
  height: 100%;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
