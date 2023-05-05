import { create } from "zustand";
import { GameStatus } from "../enums/enums";
import { patternsData } from "../data/patternsData";
import { Pattern } from "../types/pattern";

interface IState {
  isCorrect: boolean;
  soundEffects: boolean;
  selectedPatternSrc: string;
  difficulty: 1 | 2 | 3 | number;
  gameStatus: string;
  patternsData: Pattern[];
  cardsHasMatched: () => void;
  changeDifficulty: (arg: number) => void;
  changePattern: (arg: string) => void;
  setGameStatus: (arg: string) => void;
  toggleSoundEffects: () => void;
}

export const useStore = create<IState>((set) => ({
  gameStatus: GameStatus.PRE_START,
  isCorrect: false,
  difficulty: 2,
  selectedPatternSrc: patternsData[1].src,
  patternsData,
  soundEffects: true,
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
  toggleSoundEffects() {
    set((state) => ({ ...state, soundEffects: !state.soundEffects }));
  },
}));
