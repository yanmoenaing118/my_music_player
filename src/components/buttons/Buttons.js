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
`;

export const ClosePlayListBtn = styled.button`
  /* width: 100%; */
  border: none;
  outline: none;
  background: none;
  color: var(--primary-color);
  cursor: pointer;
  background-color: #fff;
`;
