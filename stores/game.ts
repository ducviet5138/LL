import { create } from 'zustand';

interface GameStore {
  isPlay: boolean;
  isFinish: boolean;
  currentQuestion: number;
  currentCorrect: number;
  setIsPlay: (isPlay: boolean) => void;
  setIsFinish: (isFinish: boolean) => void;
  setCurrentQuestion: (currentQuestion: number) => void;
  setCurrentCorrect: (currentCorrect: number) => void;
  resetGame: () => void;
}

const useGameStore = create<GameStore>((set) => ({
  isPlay: false,
  isFinish: false,
  currentQuestion: 0,
  currentCorrect: 0,
  setIsPlay: (isPlay) => set({ isPlay }),
  setIsFinish: (isFinish) => set({ isFinish }),
  setCurrentQuestion: (currentQuestion) => set({ currentQuestion }),
  setCurrentCorrect: (currentCorrect) => set({ currentCorrect }),
  resetGame: () =>
    set({
      isPlay: false,
      isFinish: false,
      currentQuestion: 0,
      currentCorrect: 0,
    }),
}));

export default useGameStore;
