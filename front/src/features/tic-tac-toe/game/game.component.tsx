import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { gameActions } from './slice/game.slice';
import { gameInfoSelector } from './slice/game.selectors';
import { selectCount } from '../../counter/counterSlice';
import { gameUrls } from './api/game.url';
import { GameInfo } from './api/game.types';
import { getCurrentGameInfo } from './api/game.api';
import { useCurrentGameInfo } from './hooks/useCurrentGameInfo';
import { Board } from './components/board/board.component';

type GamePropType = {
  test: string;
};

export const Game: FC<GamePropType> = (props) => {
  const dispatch = useAppDispatch();

  const gameInfo = useAppSelector(gameInfoSelector);

  useCurrentGameInfo();

  const boardData: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <>
      <div>player: {gameInfo?.result?.player} !!!</div>
      <div>ai: {gameInfo?.result?.ai}</div>
      <Board boardData={boardData} />
    </>
  );
};
