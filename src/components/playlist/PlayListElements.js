import styled from "styled-components";

export const PlayListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4444;
  transition: all 0.3s ease-in;
  top: ${({ open }) => (open ? 0 : `-100vh`)};

  background-color: #fff;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PlayListBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.4rem;
`;

export const PlayListTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  color: var(--primary-color);
`;
