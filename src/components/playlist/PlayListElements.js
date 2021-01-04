import styled from "styled-components";

export const PlayListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4444;
  transition: all 0.3s ease-in-out;
  top: ${({ open }) => (open ? 0 : `-100vh`)};

  background-color: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PlayListItems = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
  padding: 0 1.3rem;
`;

export const PlayListItem = styled.li`
  padding: 0.7rem 0.5px;
  border-bottom: 1px solid #333;
  color: #fff;
`;
