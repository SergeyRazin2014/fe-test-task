import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/route';
import { TicTacToeContext, GameLogItem } from './context/tic-tac-toe.context';
import './tic-tac-toe.css';

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
    <div className='tic-tac-toe'>
      <div className='tic-tac-toe__inner'>
        <TicTacToeContext.Provider
          value={{ logItems: gameLogItems, addLogItem, resetLog }}
        >
          <RouterProvider router={router} />
        </TicTacToeContext.Provider>
      </div>
    </div>
  );
};
