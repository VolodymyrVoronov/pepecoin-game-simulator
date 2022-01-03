import { FC, memo, useEffect } from "react";

import { gameStore } from "store/game";

import {
  AccountContainer,
  AccountLeftSide,
  AccountLeftSidePc,
  AccountLeftSideAnimation,
  AccountLeftSidePauseIcon,
  AccountRightSide,
  AccountText,
  AccountButton,
  AccountDivider,
} from "./Account.styled";

const Account: FC<{}> = (): JSX.Element => {
  const { toggleMining, isMiningStarted, deposit, mining, currentGraphicCard } =
    gameStore();

  useEffect(() => {
    const miningInterval = setInterval(() => {
      if (isMiningStarted) {
        mining();
      }
    }, 1000);

    return () => {
      clearInterval(miningInterval);
    };
  }, [isMiningStarted, mining]);

  const onMiningButtonClick = () => {
    toggleMining();
  };

  return (
    <AccountContainer>
      <AccountLeftSide>
        <AccountLeftSidePc />
        {isMiningStarted ? (
          <AccountLeftSideAnimation />
        ) : (
          <AccountLeftSidePauseIcon />
        )}
      </AccountLeftSide>

      <AccountRightSide>
        <AccountText>Счёт:</AccountText>
        <AccountText fontSize="28px">{deposit.toFixed(2)}</AccountText>
        <AccountText fontSize="26px">Pepecoin</AccountText>
        <AccountDivider />
        <AccountText fontSize="36px">Видеокарта:</AccountText>
        <AccountText fontSize="26px">{currentGraphicCard.name}</AccountText>
        <AccountButton onClick={onMiningButtonClick} type="button">
          {isMiningStarted ? "Остановить майнинг" : "Начать майнинг"}
        </AccountButton>
      </AccountRightSide>
    </AccountContainer>
  );
};

export default memo(Account);
