import { FC, useEffect } from "react";
import { motion } from "framer-motion";

import { gameStore } from "store/game";

import {
  AccountContainer,
  AccountLeftSide,
  AccountLeftSidePc,
  AccountLeftSideAnimation,
  AccountLeftSidePauseIcon,
  AccountRightSide,
} from "./Account.styled";

const Account: FC<{}> = (): JSX.Element => {
  const { toggleMining, isMiningStarted } = gameStore();

  useEffect(() => {
    const miningInterval = setInterval(() => {
      if (isMiningStarted) {
        console.log("mining");
      }
    }, 1000);

    return () => {
      clearInterval(miningInterval);
    };
  }, [isMiningStarted]);

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
        <button onClick={toggleMining}>toggle</button>
      </AccountRightSide>
    </AccountContainer>
  );
};

export default Account;
