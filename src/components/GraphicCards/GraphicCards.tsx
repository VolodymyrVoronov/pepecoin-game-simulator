import { FC } from "react";

import { gameStore } from "store/game";

import GraphicCard from "components/GraphicCard/GraphicCard";

import { GraphicCardsContainer } from "./GraphicCards.styled";

const GraphicCards: FC<{}> = (): JSX.Element => {
  const { graphicCards, deposit } = gameStore();

  return (
    <GraphicCardsContainer>
      {graphicCards.map((graphicCard) => {
        const { id, name, price, photo, purchased } = graphicCard;

        const canBuy = price <= deposit;

        return (
          <GraphicCard
            key={id}
            id={id}
            name={name}
            price={price}
            photo={photo}
            canBuy={canBuy}
            purchased={purchased}
          />
        );
      })}
    </GraphicCardsContainer>
  );
};

export default GraphicCards;
