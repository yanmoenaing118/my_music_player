import styled from "styled-components";

export const TogglePlayListBtnContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 1.3rem;
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
  width: 100%;
  border: none;
  outline: none;
  background: none;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding: 0.8rem 0;
  cursor: pointer;
  background-color: #000;
`;
