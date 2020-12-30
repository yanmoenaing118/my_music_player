import React from "react";
import styled from "styled-components";

const SubtitleStyle = styled.div`
  max-width: 400px;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  color: black;

  background-color: white;
`;

export default function Subtitle({ subtitleText }) {
  return <SubtitleStyle>{subtitleText}</SubtitleStyle>;
}
