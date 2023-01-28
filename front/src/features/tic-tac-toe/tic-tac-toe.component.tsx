import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/route';
import {
  GameLogContext,
  TicTacToeContext,
  GameLogItem,
} from './context/tic-tac-toe.context';

/**
 * Главный компонент игры крестики нолики
 * */
export const TicTacToe = () => {
  const [gameLogItems, setGameLogItems] = useState<GameLogItem[]>([]);

  const addLogItem = (item: GameLogItem) => {
    setGameLogItems((prev) => {
      return [...prev, item];
    });
  };

  const resetLog = () => {
    setGameLogItems([]);
  };

  return (
    <>
      <TicTacToeContext.Provider
        value={{ items: gameLogItems, addLogItem, resetLog }}
      >
        <RouterProvider router={router} />
      </TicTacToeContext.Provider>
    </>
  );
};
