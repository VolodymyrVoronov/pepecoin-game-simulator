import create from "zustand";
import produce from "immer";

import { getRandomPrice } from "const/getRandomPrice";
import { getCurrentTime } from "const/getCurrentTime";

import { graphicCardsData, correctGraphicCard } from "data/graphicCards";

interface IGraphicCard {
  id: string;
  name: string;
  price: number;
  photo: string;
  miningCoefficient: number;
}

interface IGameStore {
  isGameStarted: boolean;
  isMiningStarted: boolean;
  miningCoefficient: number;
  prices: number[];
  currentPrice: number;
  timeInterval: string[];
  minRangePice: number;
  maxRangePice: number;
  deposit: number;
  currentGraphicCard: IGraphicCard;
  graphicCards: IGraphicCard[];

  setStartGame: () => void;
  toggleMining: () => void;
  setRandomPrices: () => void;
  updateMinMaxRangePrices: () => void;
  mining: () => void;
}

export const gameStore = create<IGameStore>((set, get) => ({
  isGameStarted: false,
  isMiningStarted: false,
  miningCoefficient: 0.0005,
  prices: [],
  currentPrice: 0,
  timeInterval: [],
  minRangePice: 1,
  maxRangePice: 100,
  deposit: 0,
  currentGraphicCard: correctGraphicCard,
  graphicCards: graphicCardsData,

  setStartGame: () => {
    const startPrice = getRandomPrice(get().minRangePice, get().maxRangePice);
    const newTimeInterval = getCurrentTime();

    set(
      produce((state) => {
        state.isGameStarted = true;
        state.currentPrice = startPrice;
        state.prices.push(startPrice);
        state.timeInterval.push(newTimeInterval);
      })
    );
  },

  toggleMining: () => {
    set(
      produce((state) => {
        state.isMiningStarted = !state.isMiningStarted;
      })
    );
  },

  mining: () => {
    set(
      produce((state) => {
        state.deposit += state.currentPrice * state.miningCoefficient;
      })
    );
  },

  setRandomPrices: () => {
    const newPrice = getRandomPrice(get().minRangePice, get().maxRangePice);
    const newTimeInterval = getCurrentTime();

    set(
      produce((state) => {
        state.currentPrice = newPrice;
        state.prices.push(newPrice);
        state.timeInterval.push(newTimeInterval);
      })
    );
  },

  updateMinMaxRangePrices: () => {
    set(
      produce((state) => {
        state.minRangePice = getRandomPrice(1, 10000);
        state.maxRangePice = getRandomPrice(10000, 100000);
      })
    );
  },
}));
