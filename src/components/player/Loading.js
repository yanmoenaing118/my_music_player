import styled from "styled-components";

const LoadingContainer = styled.div`
  /* background-color: #ccc; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 60vh;
  width: 100%;
  z-index: 4000;
`;

const Circle1 = styled.div`
  --sz: 20px;
  --tX: 0;
  --animation: 700ms cubic-bezier(0.3, 0.5, 0.4, 0.9) infinite alternate-reverse;
  --hm: 20px;
  height: var(--sz);
  width: var(--sz);
  background-image: var(--bg);
  border-radius: 50%;
  transform: translateX(var(--tX));
  mix-blend-mode: lighten;
  --bg: linear-gradient(-50deg, #fbab7e 0%, #f7ce68 100%);
  margin-right: var(--hm);
  animation: attract-orange var(--animation);
  @keyframes attract-orange {
    to {
      transform: translateX(calc(var(--sz) + calc(var(--hm) / 4)));
    }
  }

  @media screen and (max-width: 480px) {
    --sz: 15px;
    --hm: 15px;
  }
`;

const Circle2 = styled.div`
  --sz: 20px;
  --tX: 0;
  --animation: 700ms cubic-bezier(0.3, 0.5, 0.4, 0.9) infinite alternate-reverse;
  --hm: 20px;
  height: var(--sz);
  width: var(--sz);
  background-image: var(--bg);
  border-radius: 50%;
  transform: translateX(var(--tX));
  mix-blend-mode: lighten;
  --bg: linear-gradient(50deg, #00bfd5 0%, #c5f5ff 100%);
  margin-left: var(--hm);
  animation: attract-blue var(--animation);
  @keyframes attract-blue {
    to {
      transform: translateX(calc(var(--sz) * -1 - calc(var(--hm) / 4)));
    }
  }

  @media screen and (max-width: 480px) {
    --sz: 15px;
    --hm: 15px;
  }
`;

export default function Loading(props) {
  return (
    <LoadingContainer>
      <Circle1></Circle1>
      <Circle2></Circle2>
    </LoadingContainer>
  );
}
