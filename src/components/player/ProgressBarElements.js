import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  display: block;
  width: 100%;
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  max-width: 800px;
  background-color: var(--gray-color-dark);
  margin-bottom: 0.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ProgressBarPlayed = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--primary-color);
`;

export const ProgressBarBuffered = styled.span`
  display: block;
  height: 100%;
  background-color: var(--primary-color-light);
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

export const ThatTime = styled.div`
  position: fixed;
  bottom: 125px;
  left: 0;
  transform: translateX(-50%);
  z-index: 5000;
  color: #fff;
`;
