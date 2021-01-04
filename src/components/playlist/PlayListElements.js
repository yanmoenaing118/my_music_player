import styled from "styled-components";

export const PlayListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4444;
  transition: all 0.3s ease-in;
  top: ${({ open }) => (open ? 0 : `-100vh`)};

  background-color: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
