import { FC } from "react";

import { gameStore } from "store/game";

import {
  GraphicCardContainer,
  GraphicCardTitle,
  GraphicCardPhoto,
  GraphicCardPrice,
  GraphicCardButton,
  GraphicCardText,
} from "./GraphicCard.styled";

interface IGraphicCardProps {
  id: string;
  name: string;
  price: number;
  photo: string;
  canBuy: boolean;
  purchased: boolean;
}

const GraphicCard: FC<IGraphicCardProps> = ({
  id,
  name,
  price,
  photo,
  canBuy,
  purchased,
}): JSX.Element => {
  const { buyGraphicCard, isMiningStarted } = gameStore();

  const onBuyButtonClick = (): void => {
    buyGraphicCard(id);
  };

  return (
    <GraphicCardContainer>
      <GraphicCardTitle>{name}</GraphicCardTitle>
      <GraphicCardPhoto
        bgImage={photo}
        style={{ opacity: `${purchased ? 0.5 : 1}` }}
      />
      <GraphicCardPrice>{price} Pepecoin</GraphicCardPrice>

      {purchased ? (
        <GraphicCardText>Карта куплена ✅</GraphicCardText>
      ) : (
        <GraphicCardButton
          onClick={onBuyButtonClick}
          type="button"
          canAfford={canBuy}
          isMiningStarted={isMiningStarted}
          disabled={!canBuy || isMiningStarted}
        >
          Купить
        </GraphicCardButton>
      )}
    </GraphicCardContainer>
  );
};

export default GraphicCard;
