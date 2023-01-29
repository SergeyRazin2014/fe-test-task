import { createContext } from 'react';
import { XO } from '../components/game/types/game.types';

export type GameLogItem = {
  actor: 'player' | 'ai';
  time: number;
  mark: XO;
  position: number;
};

export type TicTacToeContextType = {
  logItems: GameLogItem[];
  addLogItem: (item: GameLogItem) => void;
  resetLog: () => void;
};

export const TicTacToeContext = createContext<TicTacToeContextType>({
  logItems: [],
  addLogItem: () => undefined,
  resetLog: () => undefined,
});
