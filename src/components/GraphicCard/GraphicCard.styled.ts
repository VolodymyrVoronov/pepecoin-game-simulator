import styled, { css } from "styled-components";

const GraphicCardContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const GraphicCardTitle = styled.h3`
  font-size: 32px;
  text-align: center;
`;

interface IGraphicCardPhotoProps {
  bgImage: string;
}

const GraphicCardPhoto = styled.div<IGraphicCardPhotoProps>`
  height: 200px;
  width: 200px;

  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const GraphicCardPrice = styled.span`
  font-size: 26px;
  text-align: center;
`;

interface IGraphicCardButtonProps {
  canAfford: boolean;
  isMiningStarted: boolean;
}

const GraphicCardButton = styled.button<IGraphicCardButtonProps>`
  display: block;

  margin-top: 25px;
  padding: 10px 50px;

  font-size: 24px;
  font-weight: 400;
  color: #ffffff;

  background-color: ${(props) => (props.canAfford ? "green" : "tomato")};

  border-radius: 25px;
  border: none;

  cursor: pointer;

  transition: 750ms ease;

  ${(props) =>
    props.canAfford &&
    !props.isMiningStarted &&
    css`
      &:hover {
        box-shadow: 0px 0px 0px 10px #02c102;

        transition: 250ms ease;
      }
    `}

  &:disabled {
    opacity: ${(props) =>
      props.canAfford && !props.isMiningStarted ? "1" : "0.5"};
    cursor: ${(props) =>
      props.canAfford && !props.isMiningStarted ? "pointer" : "not-allowed"};
  }
`;

const GraphicCardText = styled.span`
  margin-top: 25px;

  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export {
  GraphicCardContainer,
  GraphicCardTitle,
  GraphicCardPhoto,
  GraphicCardPrice,
  GraphicCardButton,
  GraphicCardText,
};
