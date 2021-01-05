import styled from "styled-components";

export const AudioControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;

export const AudioControlBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  color: var(--primary-color);
  width: ${({ small }) => (small ? "30px" : "50px")};

  &:not(:last-child) {
    margin-right: 1.6rem;
  }
  @media screen and (max-width: 480px) {
    width: ${({ small }) => (small ? "25px" : "40px")};
  }
`;
