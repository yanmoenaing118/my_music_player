import styled from "styled-components";

export const PlayListItems = styled.ul`
  list-style: none;
  width: 100%;
`;

export const PlayListItem = styled.li`
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.4rem;
  }
`;

export const SongTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Singer = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  color: #777;
  @media screen and (max-width: 480px) {
    font-size: 0.45rem;
  }
`;
