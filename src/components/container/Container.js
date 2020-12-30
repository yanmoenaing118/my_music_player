import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding: ${({ pad }) => pad};
  margin-bottom: ${({ mb }) => (mb ? mb : "0px")};
`;

export const ContainerCenter = styled.div`
  width: 100%;
  max-width: ${({ mWidth }) => mWidth};
  margin-left: auto;
  margin-right: auto;
`;
