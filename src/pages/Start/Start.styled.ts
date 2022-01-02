import styled from "styled-components";

import startPageBg01 from "assets/global-bg-01.jpg";

const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background-image: url(${startPageBg01});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StartTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 700px;

  padding: 30px;

  background-color: rgba(255, 255, 255, 0.95);

  border-radius: 25px;
`;

const StartText = styled.p`
  display: flex;

  margin: 15px 0;

  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 50px;
`;

const StartButton = styled.button`
  display: block;

  padding: 15px 100px;

  font-size: 24px;
  font-weight: 400;

  background-color: #fff;

  border-radius: 25px;
  border: none;

  cursor: pointer;

  transition: 750ms ease;

  &:hover {
    box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.5);

    transition: 250ms ease;
  }
`;

export {
  StartContainer,
  StartTextContainer,
  StartText,
  StartButtonContainer,
  StartButton,
};
