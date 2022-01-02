import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { gameStore } from "store/game";

import Paths from "const/paths";

import PriceChart from "components/PriceChart/PriceChart";
import Account from "components/Account/Account";

import { GameContainer, GameTopBox, GameBottomBox } from "./Game.styled";

const Game: FC<{}> = (): JSX.Element => {
  const navigation = useNavigate();

  const { isGameStarted } = gameStore();

  useEffect(() => {
    if (!isGameStarted) {
      navigation(Paths.StartPage, { replace: true });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isGameStarted) {
        console.log("tick");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameStarted]);

  return (
    <GameContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 1 }}
      >
        <GameTopBox>
          <PriceChart />
          <Account />
        </GameTopBox>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 1, delay: 1 }}
      >
        <GameBottomBox>
          <div style={{ width: "100%", backgroundColor: "tomato" }}>
            asdasda
          </div>
        </GameBottomBox>
      </motion.div>
    </GameContainer>
  );
};

export default Game;
