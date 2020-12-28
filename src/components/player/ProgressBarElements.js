import styled from "styled-components";

export const Bar = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  background-color: #ccc;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 50%;
    background-color: red;
    z-index: 2;
  }
`;
