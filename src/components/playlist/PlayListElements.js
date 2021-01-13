import styled from "styled-components";

export const PlayListContainer = styled.div`
  /* background-attachment: fixed; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4444;
  transition: all 0.2s ease-in;
  left: ${({ open }) => (open ? 0 : `-100vw`)};
  /* height: 100vh; */
  background-image: linear-gradient(to bottom right, #141820 35%, #141820df);
  display: flex;
  width: 60%;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PlayListBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  box-shadow: 0 2px 3px rgba(255, 255, 255, 0.6);
  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.4rem;
  }

  /* &::after {
    content: "";
    display: table;
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background-color: #fff;
  } */
`;

export const PlayListTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  color: var(--primary-color);

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
