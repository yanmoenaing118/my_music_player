import styled from "styled-components";

export const PlayListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4444;
  transition: all 0.3s ease-in;
  left: ${({ open }) => (open ? 0 : `-100vw`)};
  height: 100vh;
  /* overflow: hidden; */

  background-color: #fff;
  overflow: scroll;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const PlayListBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.4rem;
  }
`;

export const PlayListTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  color: var(--primary-color);

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
