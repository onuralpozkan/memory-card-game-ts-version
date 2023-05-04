import { create } from "zustand";
import { GameStatus } from "../enums/enums";
import { patternsData } from "../data/patternsData";
import { Pattern } from "../types/pattern";

interface IState {
  isCorrect: boolean;
  cardsHasMatched: () => void;
  difficulty: 1 | 2 | 3 | number;
  changeDifficulty: (arg: number) => void;
  selectedPatternSrc: string;
  changePattern: (arg: string) => void;
  patternsData: Pattern[];
  gameStatus: Status;
  setGameStatus: (arg: Status) => void;
}

type Status =
  | GameStatus.FAIL
  | GameStatus.PRE_START
  | GameStatus.SUCCESS
  | GameStatus.START;

export const useStore = create<IState>((set) => ({
  gameStatus: GameStatus.PRE_START,
  isCorrect: false,
  difficulty: 2,
  selectedPatternSrc: patternsData[1].src,
  patternsData,
  cardsHasMatched: () => set((state) => ({ ...state, isCorrect: true })),
  changeDifficulty(level: number) {
    set((state) => ({ ...state, difficulty: level }));
  },
  changePattern(src: string) {
    set((state) => ({ ...state, selectedPatternSrc: src }));
  },
  setGameStatus(status) {
    set((state) => ({ ...state, gameStatus: status }));
  },
}));
