import React, { createContext } from 'react';
import { XO } from '../components/game/types/game.types';

export type GameLogItem = {
  actor: 'player' | 'ai';
  time: number;
  mark: XO;
  position: number;
};

export type GameLogContext = {
  items: GameLogItem[];
  addLogItem: (item: GameLogItem) => void;
  resetLog: () => void;
};

export const TicTacToeContext = createContext<GameLogContext>({
  items: [],
  addLogItem: () => undefined,
  resetLog: () => undefined,
});
