import create from "zustand";
import produce from "immer";

interface IGameStore {
  isGameStarted: boolean;
  isMiningStarted: boolean;
  miningCoefficient: number;

  setStartGame: () => void;
  toggleMining: () => void;
}

export const gameStore = create<IGameStore>((set, get) => ({
  isGameStarted: false,
  isMiningStarted: false,
  miningCoefficient: 0.005,

  setStartGame: () => {
    set(
      produce((state) => {
        state.isGameStarted = true;
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
}));
