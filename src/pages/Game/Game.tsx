import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { gameStore } from "store/game";

import Paths from "const/paths";

import PriceChart from "components/PriceChart/PriceChart";
import Account from "components/Account/Account";
import GraphicCards from "components/GraphicCards/GraphicCards";

import { GameContainer, GameTopBox, GameBottomBox } from "./Game.styled";

const Game: FC<{}> = (): JSX.Element => {
  const navigation = useNavigate();

  const {
    isGameStarted,
    setRandomPrices,
    updateMinMaxRangePrices,
    cutTheChartPrices,
  } = gameStore();

  useEffect(() => {
    if (!isGameStarted) {
      navigation(Paths.StartPage, { replace: true });
    }
  }, []);

  useEffect(() => {
    const priceUpdateInterval = setInterval(() => {
      if (isGameStarted) {
        setRandomPrices();
        cutTheChartPrices();
      }
    }, 1000 * 10);

    return () => {
      clearInterval(priceUpdateInterval);
    };
  }, [cutTheChartPrices, isGameStarted, setRandomPrices]);

  useEffect(() => {
    const rangePriceUpdateInterval = setInterval(() => {
      if (isGameStarted) {
        updateMinMaxRangePrices();
      }
    }, 1000 * 30);

    return () => {
      clearInterval(rangePriceUpdateInterval);
    };
  }, [isGameStarted, updateMinMaxRangePrices]);

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
          <GraphicCards />
        </GameBottomBox>
      </motion.div>
    </GameContainer>
  );
};

export default Game;
