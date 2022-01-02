import create from "zustand";
import produce from "immer";

interface IGameStore {
  isGameStarted: boolean;

  setStartGame: () => void;
}

export const gameStore = create<IGameStore>((set, get) => ({
  isGameStarted: false,

  setStartGame: () => {
    set(
      produce((state) => {
        state.isGameStarted = true;
      })
    );
  },
}));
