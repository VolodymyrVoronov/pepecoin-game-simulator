import styled from "styled-components";

import gamePageBg01 from "assets/global-bg-01.jpg";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 1440px;
  height: 100%;

  padding: 10px;

  background: linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),
    url(${gamePageBg01});
  background-repeat: no-repeat;
  background-size: cover;
`;

const GameTopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameBottomBox = styled.div`
  display: flex;

  margin-top: 25px;
`;

export { GameContainer, GameTopBox, GameBottomBox };
