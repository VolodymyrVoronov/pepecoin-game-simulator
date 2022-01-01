import create from "zustand";
import produce from "immer";

interface IGameStore {}

export const gameStore = create<IGameStore>((set, get) => ({}));
