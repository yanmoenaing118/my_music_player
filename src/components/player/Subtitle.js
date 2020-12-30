import React from "react";
import styled from "styled-components";

const SubtitleStyle = styled.div`
  max-width: 800px;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.6rem;
  color: #fff;
  line-height: 1.7;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2000;
  letter-spacing: 2px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default function Subtitle({ subtitleText }) {
  return <SubtitleStyle>{subtitleText}</SubtitleStyle>;
}
