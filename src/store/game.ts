import create from "zustand";
import produce from "immer";

import { getRandomPrice } from "const/getRandomPrice";
import { getCurrentTime } from "const/getCurrentTime";

import { graphicCardsData } from "data/graphicCards";

interface IGraphicCard {
  id: string;
  name: string;
  price: number;
  photo: string;
  miningCoefficient: number;
  purchased: boolean;
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
  currentGraphicCard: IGraphicCard | null;
  graphicCards: IGraphicCard[];

  setStartGame: () => void;
  toggleMining: () => void;
  setRandomPrices: () => void;
  updateMinMaxRangePrices: () => void;
  mining: () => void;
  buyGraphicCard: (graphicCard: string) => void;
  cutTheChartPrices: () => void;
}

export const gameStore = create<IGameStore>((set, get) => ({
  isGameStarted: false,
  isMiningStarted: false,
  miningCoefficient: 0,
  prices: [],
  currentPrice: 0,
  timeInterval: [],
  minRangePice: 1,
  maxRangePice: 100,
  deposit: 5000,
  currentGraphicCard: null,
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

  cutTheChartPrices: () => {
    set(
      produce((state) => {
        if (state.prices.length > 200 || state.timeInterval.length > 200) {
          state.prices = state.prices.slice(100);
          state.timeInterval = state.timeInterval.slice(100);
        }
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

  buyGraphicCard: (graphicCardId: string) => {
    const graphicCard = get().graphicCards.find(
      (graphicCard) => graphicCard.id === graphicCardId
    );

    if (graphicCard) {
      set(
        produce((state) => {
          state.currentGraphicCard = graphicCard;
          state.deposit -= graphicCard.price;
          state.miningCoefficient = graphicCard.miningCoefficient;
          state.graphicCards = state.graphicCards.map(
            (graphicCard: { id: string; purchased: boolean }) => {
              if (graphicCard.id === graphicCardId) {
                graphicCard.purchased = true;
              }

              return graphicCard;
            }
          );
        })
      );
    }
  },
}));
