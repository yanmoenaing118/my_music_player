import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  display: block;
  width: 100%;
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 2px;
  width: 100%;
  max-width: 800px;
  background-color: #ccc;
  margin-bottom: 0.6rem;

  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ProgressBarPlayed = styled.span`
  display: block;
  height: 4px;
  background-color: var(--primary-color);
`;

export const TimesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
export const Time = styled.span`
  font-size: 1rem;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 0.65rem;
  }
`;
