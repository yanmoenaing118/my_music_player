import styled from "styled-components";

export const TogglePlayListBtnContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 4444;
`;

export const OpenPlayListBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.5rem;
  background: none;
  color: var(--primary-color);
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.15);
    color: lightgreen;
  }

  &:active {
    transform: scale(1);
    color: lightgreen;
  }
`;

export const ClosePlayListBtn = styled.button`
  /* width: 100%; */

  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: none;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
  }
`;
