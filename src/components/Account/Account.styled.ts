import styled, { css, keyframes } from "styled-components";

import pcIcon01 from "assets/pc-icon-01.svg";
import pauseIcon01 from "assets/pause-icon-01.svg";
import miningAnimation01 from "assets/mining-animation-01.gif";

const AccountContainer = styled.div`
  display: flex;

  width: 49.5%;

  padding: 15px;

  background-color: #ffffff;

  border-radius: 25px;
`;

const AccountLeftSide = styled.div`
  display: flex;
  position: relative;

  width: 50%;
`;

const AccountLeftSidePc = styled.div`
  display: flex;

  width: 100%;

  background-image: url(${pcIcon01});
  background-repeat: no-repeat;
`;

const AccountLeftSideAnimation = styled.div`
  position: absolute;

  display: block;

  height: 65%;
  width: 99%;

  background-image: url(${miningAnimation01});
  background-repeat: no-repeat;
  background-size: cover;

  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  border: 20px solid #000000;
`;

const blinkAnimation = keyframes`
  50% {
    opacity: 0.0;
  }
`;

const AccountLeftSidePauseIcon = styled.div`
  position: absolute;

  display: block;

  top: 35%;
  left: 50%;

  transform: translate(-50%, -50%);

  height: 100px;
  width: 100px;

  background-image: url(${pauseIcon01});
  background-repeat: no-repeat;
  background-size: cover;

  animation: ${blinkAnimation} 2s ease-in-out 0s infinite;
`;

const AccountRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 50%;
`;

interface IAccountTextProps {
  fontSize?: string;
}

const AccountText = styled.span<IAccountTextProps>`
  display: flex;

  margin-top: 20px;

  font-size: ${(props) => (props.fontSize ? props.fontSize : "48px")};
  font-weight: 600;
`;

const AccountButton = styled.button`
  display: block;

  margin-top: 25px;
  padding: 10px 20px;

  font-size: 18px;
  font-weight: 400;
  color: #ffffff;

  background-color: #000000;

  border-radius: 25px;
  border: none;

  cursor: pointer;

  transition: 750ms ease;

  &:hover {
    border: none;

    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.5);

    transition: 250ms ease;
  }
`;

const AccountDivider = styled.div`
  display: flex;

  width: 50%;
  height: 2px;

  margin-top: 25px;

  background: #000000;
`;

export {
  AccountContainer,
  AccountLeftSide,
  AccountLeftSidePc,
  AccountLeftSideAnimation,
  AccountLeftSidePauseIcon,
  AccountRightSide,
  AccountText,
  AccountButton,
  AccountDivider,
};
